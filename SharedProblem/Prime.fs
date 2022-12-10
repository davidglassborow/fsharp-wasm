namespace SharedProblem

module Prime =

    let private primesAPF32() =
      let rec oddprimes() =
        let BUFSZ = 1<<<17 in let buf = Array.zeroCreate (BUFSZ>>>5) in let BUFRNG = uint32 BUFSZ<<<1
        let inline testbit i = (buf.[i >>> 5] &&& (1u <<< (i &&& 0x1F))) = 0u
        let inline cullbit i = let w = i >>> 5 in buf.[w] <- buf.[w] ||| (1u <<< (i &&& 0x1F))
        let inline cullp p s low = let rec cull' i = if i < BUFSZ then cullbit i; cull' (i + int p)
                                   cull' (if s >= low then int((s - low) >>> 1)
                                          else let r = ((low - s) >>> 1) % p in if r = 0u then 0 else int(p - r))
        let inline cullpg low = //cull composites from whole buffer page for efficiency
          let max = low + BUFRNG - 1u in let max = if max < low then uint32(-1) else max
          let sqrtlm = uint32(sqrt(float max)) in let sqrtlmndx = int((sqrtlm - 3u) >>> 1)
          if low <= 3u then for i = 0 to sqrtlmndx do if testbit i then let p = uint32(i + i + 3) in cullp p (p * p) 3u
          else baseprimes |> Seq.skipWhile (fun p -> //force side effect of culling to limit of buffer
              let s = p * p in if p > 0xFFFFu || s > max then false else cullp p s low; true) |> Seq.item 0 |> ignore
        let rec mkpi i low =
          if i >= BUFSZ then let nlow = low + BUFRNG in Array.fill buf 0 buf.Length 0u; cullpg nlow; mkpi 0 nlow
          else (if testbit i then i,low else mkpi (i + 1) low)
        cullpg 3u; Seq.unfold (fun (i,lw) -> //force cull the first buffer page then doit
            let ni,nlw = mkpi i lw in let p = nlw + (uint32 ni <<< 1)
            if p < lw then None else Some(p,(ni+1,nlw))) (0,3u)
      and baseprimes = oddprimes() |> Seq.cache
      seq { yield 2u; yield! oddprimes() }


    let private calculatePrime nth =
        primesAPF32() |> Seq.item nth

    /// Time a problem, use simple DateTime so compatible with Fable etc.
    let private time f =
        let start = System.DateTime.Now
        let answer = f()
        let stop = System.DateTime.Now - start
        answer,stop.TotalSeconds

    let private calculateHugePrime nth =
        let ans, tim = time <| fun () -> calculatePrime nth
        $"Calculated {nth} prime in {tim} = {ans}"

    let run () =
        calculateHugePrime 10000 // 2_500_000
        //calculateHugePrime 10_000_000