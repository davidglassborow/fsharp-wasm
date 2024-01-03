#r "nuget: Plotly.NET"
open Plotly.NET

let tenMillion = [  
    "Wasm Safari Debug", 15.88 
    "Wasm Safari Release", 11.79 
    "Wasm Safari Release AOT", 11.129
    "Wasm Chrome Debug", 35.2
    "Wasm Chrome Release", 28.99
    "Wasm Chrome Release AOT", 28.88
    "Native .net7", 1.93
    "Native .net6", 1.96
    "Fable Safari", 4.58
    "Fable Chrome", 1.32
]

let net8 = [  
    "Native .net7 (debug)", 1.93
    "Native .net8 (debug)", 1.84
    "Native .net8 (release)", 0.83
    "Wasm Safari Release AOT", 9.53
    "Wasm Chrome Release AOT", 9.137
]


Chart.Column(
    tenMillion |> List.map snd,
    tenMillion |> List.map fst ) |> Chart.show
