function new_page(){
    pageContent.innerHTML = `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Bootstrap Example</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </head>
    <body>

    <nav class="navbar navbar-expand-lg navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header mr-auto">
          <a class="navbar-brand" href="#">COMPUTER SCIENCE</a>
        </div>
        <ul class="nav navbar-nav mr-auto">
          <li class="active"><a href="https://www.uco.edu/cms/academics/computer-science/">CS Dept</a></li>
          <li class="dropdown"><a  data-toggle="dropdown" href="#">My Profile
            <ul class="dropdown-menu">
              <li><a ref="myFunction()">Page email</a></li>
              <li><a href="#">Page photos</a></li>
              <li><a href="#">Page 1-3</a></li>
            </ul>
          </li>
          <li><a href="#">Page 2</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
          <li><a href="http://localhost:5000/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
      </div>
    </nav>
    
       
    
  
    
    </body>
    </html>
    
  `;

}