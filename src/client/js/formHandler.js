
let baseURL="https://api.meaningcloud.com/sentiment-2.1?"
let apiKey="29eff34fb145774dbf83f248a294773c"

function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('url').value
    Client.checkForURL(formText)
    console.log("::: Form Submitted :::")
    postData('http://localhost:8081/api',{url:formText})
    const apiURL = `${baseURL}key=${apiKey}&url=${formText}&lang=en`
    console.log("apiurl=",apiURL)

    getdata(apiURL)
    .then(function(newData) {
        document.getElementById("agreement").innerHTML = `Agreement: ${newData.agreement}`;
        document.getElementById("confidence").innerHTML = `Confidence: ${newData.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${newData.irony}`;
        document.getElementById("model").innerHTML = `Model: ${newData.model} `;
        document.getElementById('score_tag').innerHTML = `Score_tag: ${checkScore(newData.score_tag)} `;
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${newData.subjectivity}`;
    })
}
///postdata fn
const postData = async(url="",data={})=>
{
    console.log("Post Data =",data)
    const response=await fetch(url,
        {
                method: 'POST', 
                credentials: 'same-origin',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
        })
    try
    {
        const newData=await response.json();
        console.log("newData=",newData);
        return newData;
    }
    catch(error)
    {
        console.log("error",error);
    }
}
///get APIURL
const getdata=async(apiURL)=>
{
    const response=await fetch(apiURL);
    try
    {
        const apidata=await response.json();
        console.log("fetchdata=",apidata)
        return apidata;
    }
    catch(error)
    {
        console.log("error",error);
    }
}
///CHECH FOT SCORE_TAG
function checkScore(score) {
    let scoring;
    switch (score){
        case 'P':
            scoring = 'POSITIVE';
             break;
        case 'P+':
           scoring = 'STRONG POSITIVE';
            break;
        case 'NEU':
           scoring = 'neutral';
            break;
        case 'N':
            scoring = 'negative';
            break;
        case 'N+':
            scoring = 'strong negative';
            break;
        case 'NONE':
           scoring = 'no sentiment';
    }
    return scoring.toUpperCase();
}

export { handleSubmit }
export{checkScore}