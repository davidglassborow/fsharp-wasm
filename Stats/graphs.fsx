#r "nuget: Plotly.NET"
open Plotly.NET

let tenMillion = [  
    "Wasm Safari", 15.88 
    "Wasm Chrome", 35.2
    "Native .net7", 1.93
    "Native .net6", 1.96
    "Fable Safari", 4.58
    "Fable Chrome", 1.32
]

Chart.Column(
    tenMillion |> List.map snd,
    tenMillion |> List.map fst ) |> Chart.show
