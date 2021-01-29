<script type="text/javascript">  
        $.ajax({  
            type: 'GET',  
            url: "api/values/Get",  
            datatype: 'json',  
            headers:  
                {  
                    Authorization: 'Basic ' + btoa(username + ':' + password)  
                },  
            success: function (data) {  
            },  
            error: function (data) {  
            }  
        });          
 </script>

this.props.answers[this.props.step]
        .map((text) => (
            <h1>
                {text}
            </h1>
        ));

$.ajax({  
    type: "GET",  
    url: "http://localhost:28357/api/values",  
    contentType: "application/json; charset=utf-8",  
    headers: { 'X-SampleAppApiKey': 'SampleAppX123:YesAppKeyIsPersist' },  
    dataType: "json",  
    success: function (response) {  
        if (response != "") {  
            $(response).each(function (index, element) {  
                viewModel.employeeCollection.push(element);  
            });  
            ko.applyBindings(viewModel);  
        }  
    },  
    error: function (event) {  
        //If any errors occurred - detail them here  
        alert("Transmission Failed. (An error has occurred)");  
    }  
});  

return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

 React.useEffect(() => {
    async function fetchdata() {
        const response = await fetch(" https://quizapi.io/api/v1/questions");
        const data = await response.json();

        setQuetion(data);

        let randomIndex = Math.floor(Math.random() * data.length);
        setRandomQue(data[randomIndex]);

        console.log(data);
    }

    fetchdata();
}, []);
