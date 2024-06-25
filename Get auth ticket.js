(async function() {
    var t = (await fetch("https://auth.roblox.com/v1/authentication-ticket", {
        method: "POST",
        credentials: "include"
    })).headers.get("x-csrf-token")

    var ticket = (await fetch("https://auth.roblox.com/v1/authentication-ticket", {
        method: "POST",
        credentials: "include",
        headers: {"x-csrf-token": t}
    })).headers.get("rbx-authentication-ticket")

    console.log(ticket);
})()
