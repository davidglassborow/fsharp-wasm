https://learn.microsoft.com/en-us/aspnet/core/blazor/host-and-deploy/webassembly?view=aspnetcore-7.0  AOT ????

2017 Mozill, Google,  Microsoft, Webkit in Browsers
https://news.ycombinator.com/item?id=33721685 - wasmer3

The sieve of Eratosthenes


If I had more time, test Wasm on Cloudflare

How it works:
- SDK: Microsoft.NET.Sdk.BlazorWebAssembly

## Blazor

- cd Blazor
- dotnet build --property:Configuration=Release
- dotnet run

- 2.5M, 3.235 in Safari 16.1
- 10M, 15.88 Safari
- 2.5M, 8.10 in Chrome 108
- 10M, 35.2 in Chrome 108

## Bolero

https://fsbolero.io, NET6

- dotnet run -p src/MyApp.Server

- 2.5M, 3.33 in Safari 16.1
- 2.5M, 9.20 in Chrome 108

## Fun.Blazor

https://slaveoftime.github.io/Fun.Blazor.Docs/

- 2.5M, 3.73 in Safari 16.1
- 2.5M, 8.78 in Chrome 108

- 10M prime in 16.372 in Safari 16.1
- 10M prime in 36.52 in Crhome 108

## Console

net7

- cd Console
- dotnet build --property:Configuration=Release
- dotnet run
- open "http://localhost:5214"

- 2.5M, 0.47 seconds.
- 10M, 1.93 seconds
- 100M, 21.72
- 100m 22.212897 

net6

- 10m, 1.96 seconds
- 100M, 21.72

## Fable

- Fable.io

- cd Fable
- npm install
- npm start

- Safari 16.1, 2.5M, 1.13 seconds.  10M, 4.58s
- Chrome 108, 2.5M, 0.33 seconds. 10M, 1.32s

## Wasi

- https://github.com/SteveSandersonMS/dotnet-wasi-sdk
- https://github.com/bytecodealliance/wasmtime
- Crashes

## Take aways for my tests

- caveats
  - bolero and fun.blazor net6
  - other normal caveats apply
  - not consistently checked in production mode
  - only for interesting

- Chrome 108 runs javascript x3 faster than Safari 16.1 on my mac
- Safari runs wasm x2.5 faster than Chrome on my mac
- Fable is approximately as fast native F# code which is very surprising, larger tests might help dotnet via the JIT
