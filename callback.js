function loadScript(src) {
    // creates a <script> tag and append it to the page
    // this causes the script with given src to start loading and run when complete
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
  }


 // Promise
let promise = new Promise((resolve, reject)=>{
// resolve(value)
// reject(error)
});


// async

async function f() {
    return 1;
  }
  
f().then(alert); // 1

async function f() {
    return Promise.resolve(1);
  }
  
f().then(alert); // 1