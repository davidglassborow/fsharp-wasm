import { fill } from "../Fable/src/fable_modules/fable-library.4.0.0-theta-018/Array.js";
import { singleton, append, delay, cache, unfold, skipWhile, item } from "../Fable/src/fable_modules/fable-library.4.0.0-theta-018/Seq.js";
import { op_Subtraction, now } from "../Fable/src/fable_modules/fable-library.4.0.0-theta-018/Date.js";
import { totalSeconds } from "../Fable/src/fable_modules/fable-library.4.0.0-theta-018/TimeSpan.js";

function primesAPF32() {
    const oddprimes = () => {
        let i_9, r_2;
        const BUFSZ = (1 << 17) | 0;
        const buf = new Uint32Array(BUFSZ >> 5);
        const BUFRNG = ((BUFSZ >>> 0) << 1) >>> 0;
        const mkpi = (i_mut, low_mut) => {
            let i_2, r, i_7;
            mkpi:
            while (true) {
                const i = i_mut, low = low_mut;
                if (i >= BUFSZ) {
                    const nlow = low + BUFRNG;
                    fill(buf, 0, buf.length, 0);
                    const low_1 = nlow;
                    const max = (low_1 + BUFRNG) - 1;
                    const max_1 = (max < low_1) ? (-1 >>> 0) : max;
                    const sqrtlm = Math.sqrt(max_1) >>> 0;
                    const sqrtlmndx = (~(~((sqrtlm - 3) >>> 1))) | 0;
                    if (low_1 <= 3) {
                        for (let i_1 = 0; i_1 <= sqrtlmndx; i_1++) {
                            if ((i_2 = (i_1 | 0), ((buf[i_2 >> 5] & ((1 << (i_2 & 31)) >>> 0)) >>> 0) === 0)) {
                                const p = ((i_1 + i_1) + 3) >>> 0;
                                const low_2 = 3;
                                const s = p * p;
                                const p_1 = p;
                                const cull$0027 = (i_3_mut) => {
                                    cull$0027:
                                    while (true) {
                                        const i_3 = i_3_mut;
                                        if (i_3 < BUFSZ) {
                                            const i_4 = i_3 | 0;
                                            const w = (i_4 >> 5) | 0;
                                            buf[w] = ((buf[w] | ((1 << (i_4 & 31)) >>> 0)) >>> 0);
                                            i_3_mut = (i_3 + (~(~p_1)));
                                            continue cull$0027;
                                        }
                                        break;
                                    }
                                };
                                cull$0027((s >= low_2) ? (~(~((s - low_2) >>> 1))) : ((r = (((low_2 - s) >>> 1) % p_1), (r === 0) ? 0 : (~(~(p_1 - r))))));
                            }
                        }
                    }
                    else {
                        item(0, skipWhile((p_2) => {
                            let r_1;
                            const s_1 = p_2 * p_2;
                            if ((p_2 > 65535) ? true : (s_1 > max_1)) {
                                return false;
                            }
                            else {
                                const low_3 = low_1;
                                const s_2 = s_1;
                                const p_3 = p_2;
                                const cull$0027_1 = (i_5_mut) => {
                                    cull$0027_1:
                                    while (true) {
                                        const i_5 = i_5_mut;
                                        if (i_5 < BUFSZ) {
                                            const i_6 = i_5 | 0;
                                            const w_1 = (i_6 >> 5) | 0;
                                            buf[w_1] = ((buf[w_1] | ((1 << (i_6 & 31)) >>> 0)) >>> 0);
                                            i_5_mut = (i_5 + (~(~p_3)));
                                            continue cull$0027_1;
                                        }
                                        break;
                                    }
                                };
                                cull$0027_1((s_2 >= low_3) ? (~(~((s_2 - low_3) >>> 1))) : ((r_1 = (((low_3 - s_2) >>> 1) % p_3), (r_1 === 0) ? 0 : (~(~(p_3 - r_1))))));
                                return true;
                            }
                        }, baseprimes));
                    }
                    i_mut = 0;
                    low_mut = nlow;
                    continue mkpi;
                }
                else if ((i_7 = (i | 0), ((buf[i_7 >> 5] & ((1 << (i_7 & 31)) >>> 0)) >>> 0) === 0)) {
                    return [i, low];
                }
                else {
                    i_mut = (i + 1);
                    low_mut = low;
                    continue mkpi;
                }
                break;
            }
        };
        const low_4 = 3;
        const max_2 = (low_4 + BUFRNG) - 1;
        const max_3 = (max_2 < low_4) ? (-1 >>> 0) : max_2;
        const sqrtlm_1 = Math.sqrt(max_3) >>> 0;
        const sqrtlmndx_1 = (~(~((sqrtlm_1 - 3) >>> 1))) | 0;
        if (low_4 <= 3) {
            for (let i_8 = 0; i_8 <= sqrtlmndx_1; i_8++) {
                if ((i_9 = (i_8 | 0), ((buf[i_9 >> 5] & ((1 << (i_9 & 31)) >>> 0)) >>> 0) === 0)) {
                    const p_4 = ((i_8 + i_8) + 3) >>> 0;
                    const low_5 = 3;
                    const s_3 = p_4 * p_4;
                    const p_5 = p_4;
                    const cull$0027_2 = (i_10_mut) => {
                        cull$0027_2:
                        while (true) {
                            const i_10 = i_10_mut;
                            if (i_10 < BUFSZ) {
                                const i_11 = i_10 | 0;
                                const w_2 = (i_11 >> 5) | 0;
                                buf[w_2] = ((buf[w_2] | ((1 << (i_11 & 31)) >>> 0)) >>> 0);
                                i_10_mut = (i_10 + (~(~p_5)));
                                continue cull$0027_2;
                            }
                            break;
                        }
                    };
                    cull$0027_2((s_3 >= low_5) ? (~(~((s_3 - low_5) >>> 1))) : ((r_2 = (((low_5 - s_3) >>> 1) % p_5), (r_2 === 0) ? 0 : (~(~(p_5 - r_2))))));
                }
            }
        }
        else {
            item(0, skipWhile((p_6) => {
                let r_3;
                const s_4 = p_6 * p_6;
                if ((p_6 > 65535) ? true : (s_4 > max_3)) {
                    return false;
                }
                else {
                    const low_6 = low_4;
                    const s_5 = s_4;
                    const p_7 = p_6;
                    const cull$0027_3 = (i_12_mut) => {
                        cull$0027_3:
                        while (true) {
                            const i_12 = i_12_mut;
                            if (i_12 < BUFSZ) {
                                const i_13 = i_12 | 0;
                                const w_3 = (i_13 >> 5) | 0;
                                buf[w_3] = ((buf[w_3] | ((1 << (i_13 & 31)) >>> 0)) >>> 0);
                                i_12_mut = (i_12 + (~(~p_7)));
                                continue cull$0027_3;
                            }
                            break;
                        }
                    };
                    cull$0027_3((s_5 >= low_6) ? (~(~((s_5 - low_6) >>> 1))) : ((r_3 = (((low_6 - s_5) >>> 1) % p_7), (r_3 === 0) ? 0 : (~(~(p_7 - r_3))))));
                    return true;
                }
            }, baseprimes));
        }
        return unfold((tupledArg) => {
            const i_14 = tupledArg[0] | 0;
            const lw = tupledArg[1];
            const patternInput = mkpi(i_14, lw);
            const nlw = patternInput[1];
            const ni = patternInput[0] | 0;
            const p_8 = nlw + (((ni >>> 0) << 1) >>> 0);
            return (p_8 < lw) ? (void 0) : [p_8, [ni + 1, nlw]];
        }, [0, 3]);
    };
    const baseprimes = cache(oddprimes());
    return delay(() => append(singleton(2), delay(oddprimes)));
}

function calculatePrime(nth) {
    return item(nth, primesAPF32());
}

function time(f) {
    const start = now();
    const answer = f();
    const stop = op_Subtraction(now(), start);
    return [answer, totalSeconds(stop)];
}

export function calculateHugePrime(nth) {
    const patternInput = time(() => calculatePrime(nth));
    const tim = patternInput[1];
    const ans = patternInput[0];
    return `Calculated ${nth} prime in ${tim} = ${ans}`;
}

