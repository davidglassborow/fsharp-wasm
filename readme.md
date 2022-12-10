
## Blazor

- cd Blazor
- dotnet build --property:Configuration=Release
- dotnet run

- 2.5M, 3.235 in Safari 16.1
- 10M, 15.88 Safari
- 2.5M, 8.10 in Chrome 108
- 10M, 35.2 in Chrome 108


## Console

- cd Console
- dotnet build --property:Configuration=Release
- dotnet run
- open "http://localhost:5214"

- 2.5M, 0.47 seconds.
- 10M, 1.93 seconds

## Fable

- cd Fable
- npm install
- npm start

- Safari 16.1, 2.5M, 1.13 seconds.  10M, 4.58s
- Chrome 108, 2.5M, 0.33 seconds. 10M, 1.32s