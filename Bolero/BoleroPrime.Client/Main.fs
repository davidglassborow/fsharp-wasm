module BoleroPrime.Client.Main

open System
open Elmish
open Bolero
open Bolero.Html
open Bolero.Remoting
open Bolero.Remoting.Client
open Bolero.Templating.Client

/// Routing endpoints definition.
type Page =
    | [<EndPoint "/">] Home
    | [<EndPoint "/problem">] Problem

/// The Elmish application's model.
type Model =
    {
        page: Page
        answer: string
        error: string option
    }


let initModel =
    {
        page = Home
        error = None
        answer = "Not calculated yet"
    }

/// The Elmish application's update messages.
type Message =
    | SetPage of Page
    | SolveProblem
    | Error of exn
    | ClearError

let solveProblem () =
    SharedProblem.Prime.run()

let update message model =
    match message with
    | SetPage page ->
        { model with page = page }, Cmd.none

    | SolveProblem ->
        { model with answer = solveProblem() }, Cmd.none

    | Error exn ->
        { model with error = Some exn.Message }, Cmd.none
    | ClearError ->
        { model with error = None }, Cmd.none

/// Connects the routing system to the Elmish application.
let router = Router.infer SetPage (fun model -> model.page)

type Main = Template<"wwwroot/main.html">

let homePage model dispatch =
    Main.Home().Elt()

let problemPage model dispatch =
    Main.Problem()
        .SolveProblem(fun _ -> dispatch SolveProblem)
        .Answer(model.answer)
        .Elt()

let menuItem (model: Model) (page: Page) (text: string) =
    Main.MenuItem()
        .Active(if model.page = page then "is-active" else "")
        .Url(router.Link page)
        .Text(text)
        .Elt()

let view model dispatch =
    Main()
        .Menu(concat {
            menuItem model Home "Home"
            menuItem model Problem "Problem"
        })
        .Body(
            cond model.page <| function
            | Home -> homePage model dispatch
            | Problem -> problemPage model dispatch
        )
        .Error(
            cond model.error <| function
            | None -> empty()
            | Some err ->
                Main.ErrorNotification()
                    .Text(err)
                    .Hide(fun _ -> dispatch ClearError)
                    .Elt()
        )
        .Elt()

type MyApp() =
    inherit ProgramComponent<Model, Message>()

    override this.Program =
        Program.mkProgram (fun _ -> initModel, Cmd.ofMsg ClearError) update view
        |> Program.withRouter router
#if DEBUG
        |> Program.withHotReload
#endif
