async function handle() {
    let promise = new Promise((resolve , reject) => {
        setTimeout(() => {
            try {
                console.log(sangram)
            }catch(err) {
                console.log(err.name);
                console.log(err.message)
            }
        }, 2000)
    })
}

handle()