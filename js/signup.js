var signup_form =  {
                    element:"form",
                    attributes:{ "class":"signup_form" , "id" :"popup_signup_form", "action":"/php/createartist.php"}              
                   };

signup_form.box = {
                    element:"div",
                    attributes:{"class":"signup_container","id":"popup_signup_form_container"}
                   };
signup_form.inputs = {
                      element:"input",

                      attributes:[
                       {
                         "class":"",
                        "id":"",
                        "type":"text",
                        "placeholder":"Enter your stage name i.e Lil Wayne",
                         "name": ""
                         },
                            {
                            "class":"" , 
                            "id":"",
                            "type":"email",
                            "placeholder":"Enter your email address",
                             "name":""
                             },
                            {
                             "class":"" , 
                            "id":"",
                            "type":"date",
                            "name":""
                            },
                            {
                            "class":"",
                            "id":"",
                            "type":"text",
                            "placeholder":"Enter a password",
                            "name":""
                            }]
                      };
signup_form.submit= {
                      element:"button",
                    attributes:  {
                    "class":"" , 
                            "id":"",
                            "type":"submit",
                            "value": "Sign Up"
                            
                       },
                      text:"Sign Up"
                      };
                    
signup_form.createSignUpForm=function(event){
    event.preventDefault();
    if(document.getElementById("popup_signup_form_container"))
        return;
        
    var form     =  document.createElement(this.element);
    var div      =  document.createElement(this.box.element);
    var name     =  document.createElement(this.inputs.element);
    var label_for_name = document.createElement("label");
    var email    =  document.createElement(this.inputs.element);
    var label_for_email = document.createElement("label");
    var password =  document.createElement(this.inputs.element);
    var  label_for_password = document.createElement("label");
    var birthday =  document.createElement(this.inputs.element);
    var label_for_birthday = document.createElement("label");
    var button   =  document.createElement(this.submit.element);
    
    div.setAttribute(Object.keys(signup_form.box.attributes)[0], signup_form.box.attributes["class"]);
    div.setAttribute(Object.keys(signup_form.box.attributes)[1], signup_form.box.attributes["id"]);
    document.getElementById("header_login_container").appendChild(div);
    
    form.setAttribute(Object.keys(signup_form.attributes)[0], signup_form.attributes["class"]);
    form.setAttribute(Object.keys(signup_form.attributes)[1], signup_form.attributes["id"]);
    form.setAttribute(Object.keys(signup_form.attributes)[2], signup_form.attributes["action"]);
    document.getElementById(signup_form.box.attributes["id"]).appendChild(form);
    
    
    
 
    name.setAttribute(Object.keys(signup_form.inputs.attributes[0])[0], signup_form.inputs.attributes[0]["class"]);
    name.setAttribute(Object.keys(signup_form.inputs.attributes[0])[1], signup_form.inputs.attributes[0]["id"]);
    name.setAttribute(Object.keys(signup_form.inputs.attributes[0])[2], signup_form.inputs.attributes[0]["type"]);
    name.setAttribute(Object.keys(signup_form.inputs.attributes[0])[3], signup_form.inputs.attributes[0]["placeholder"]);
    name.setAttribute(Object.keys(signup_form.inputs.attributes[0])[4], signup_form.inputs.attributes[0]["name"]);
    label_for_name.setAttribute("for","stage_name");
    document.getElementById("popup_signup_form").appendChild(label_for_name);
    label_for_name.innerHTML = ("Stage Name: " + " ");
    document.getElementById("popup_signup_form").appendChild(name);
    
    
    
    email.setAttribute(Object.keys(signup_form.inputs.attributes[1])[0], signup_form.inputs.attributes[1]["class"]);
    email.setAttribute(Object.keys(signup_form.inputs.attributes[1])[1], signup_form.inputs.attributes[1]["id"]);
    email.setAttribute(Object.keys(signup_form.inputs.attributes[1])[2], signup_form.inputs.attributes[1]["type"]);
    email.setAttribute(Object.keys(signup_form.inputs.attributes[1])[3], signup_form.inputs.attributes[1]["placeholder"]);
    email.setAttribute(Object.keys(signup_form.inputs.attributes[1])[4], signup_form.inputs.attributes[1]["name"]);
    label_for_email.setAttribute("for","email");
    document.getElementById("popup_signup_form").appendChild(label_for_email);
    label_for_email.innerHTML= ("Email: " + "    ");
    document.getElementById("popup_signup_form").appendChild(email);
    
    
    
    password.setAttribute(Object.keys(signup_form.inputs.attributes[3])[0], signup_form.inputs.attributes[3]["class"]);
    password.setAttribute(Object.keys(signup_form.inputs.attributes[3])[1], signup_form.inputs.attributes[3]["id"]);
    password.setAttribute(Object.keys(signup_form.inputs.attributes[3])[2], signup_form.inputs.attributes[3]["type"]);
    password.setAttribute(Object.keys(signup_form.inputs.attributes[3])[3], signup_form.inputs.attributes[3]["placeholder"]);
    password.setAttribute(Object.keys(signup_form.inputs.attributes[3])[4], signup_form.inputs.attributes[3]["name"]);
    label_for_password.setAttribute("for","password");
    document.getElementById("popup_signup_form").appendChild(label_for_password);
    label_for_password.innerHTML= ("Password: " + " ");
    document.getElementById("popup_signup_form").appendChild(password);
    
    birthday.setAttribute(Object.keys(signup_form.inputs.attributes[2])[0], signup_form.inputs.attributes[2]["class"]);
    birthday.setAttribute(Object.keys(signup_form.inputs.attributes[2])[1], signup_form.inputs.attributes[2]["id"]);
    birthday.setAttribute(Object.keys(signup_form.inputs.attributes[2])[2], signup_form.inputs.attributes[2]["type"]);
    birthday.setAttribute(Object.keys(signup_form.inputs.attributes[2])[3], signup_form.inputs.attributes[2]["placeholder"]);
    birthday.setAttribute(Object.keys(signup_form.inputs.attributes[2])[4], signup_form.inputs.attributes[2]["name"]);
    label_for_birthday.setAttribute("for","birthday");
    document.getElementById("popup_signup_form").appendChild(label_for_birthday);
    label_for_birthday.innerHTML= ("Birthday: " + " ");
    document.getElementById("popup_signup_form").appendChild(birthday);
    
    button.setAttribute(Object.keys(signup_form.submit.attributes)[0], signup_form.submit.attributes["class"]);
    button.setAttribute(Object.keys(signup_form.submit.attributes)[1], signup_form.submit.attributes["id"]);
    button.setAttribute(Object.keys(signup_form.submit.attributes)[2], signup_form.submit.attributes["type"]);
    button.setAttribute(Object.keys(signup_form.submit.attributes)[3], signup_form.submit.attributes["value"]);
    document.getElementById("popup_signup_form").appendChild(button);
    button.innerHTML = "Sign Up";
  //  alert("hello");
};
                    
