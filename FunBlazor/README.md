This is a blazor WASM mode app with Fun.Blazor

wwwroot/index.html is the entry point for browser. it will load all the necessary files.

App.fs contains UI logic

Startup.fs is for hooking up everything and configuring server


## Dev with hot-reload

    Open terminal and run
    dotnet run
    
    Open terminal and run
    fun-blazor watch .\FunBlazor.fsproj 

    > dotnet tool install --global Fun.Blazor.Cli --version 2.1.*
