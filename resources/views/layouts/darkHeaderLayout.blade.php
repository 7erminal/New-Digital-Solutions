<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">

    <link rel="stylesheet" href="/assets/nav/fonts/icomoon/style.css">

    <link rel="stylesheet" href="/assets/nav/css/owl.carousel.min.css">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="/assets/nav/css/bootstrap.min.css">
    
    <!-- Style -->
    <link rel="stylesheet" href="/assets/nav/css/style.css">

    <title>Website Menu #2</title>
    @viteReactRefresh
    @vite('resources/js/app.jsx')
  </head>
  <body>


    <div class="site-mobile-menu site-navbar-target">
        <div class="site-mobile-menu-header">
          <div class="site-mobile-menu-close mt-3">
            <span class="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div class="site-mobile-menu-body"></div>
      </div>



      <header class="site-navbar site-navbar-target" role="banner">

        <div class="container">
          <div class="row align-items-center position-relative">

            <div class="col-3">
              <div class="site-logo-dark">
                <a href="/" class="font-weight-bold">New Digital Solutions</a>
              </div>
            </div>

            <div class="col-9  text-right">
              

              <span class="d-inline-block d-lg-none"><a href="#" class="text-primary site-menu-toggle js-menu-toggle py-5"><span class="icon-menu h3 text-white"></span></a></span>


              <nav class="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                <ul class="site-menu site-menu-dark main-menu js-clone-nav ml-auto ">
                  <li class="active"><a href="#" class="nav-link">Home</a></li>
                  <li><a href="#" class="nav-link">Portfolio</a></li>
                  <li><a href="/company" class="nav-link">About</a></li>
                  <li><a href="#" class="nav-link">Services</a></li>
                  <li><a href="#" class="nav-link">Blog</a></li>
                  <li><a href="#" class="nav-link">Contact</a></li>
                </ul>
              </nav>
            </div>

            
          </div>
        </div>

      </header>

    @yield('content')

    <section class="footer">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="vstack gap-3">
                        <div className="p-2">First item</div>
                        <div className="p-2">Second item</div>
                        <div className="p-2">Third item</div>
                    </div>
                </div>
                <div class="col">
                    <div class="vstack gap-3">
                        <div className="p-2">First item</div>
                        <div className="p-2">Second item</div>
                        <div className="p-2">Third item</div>
                    </div>
                </div>
                <div class="col">
                    <div class="vstack gap-3">
                        <div className="p-2">First item</div>
                        <div className="p-2">Second item</div>
                        <div className="p-2">Third item</div>
                    </Stack>
                </div>
                <div class="col">
                    <div class="vstack gap-3">
                        <div className="p-2">First item</div>
                        <div className="p-2">Second item</div>
                        <div className="p-2">Third item</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
       
    <script src="/assets/nav/js/jquery-3.3.1.min.js"></script>
    <script src="/assets/nav/js/popper.min.js"></script>
    <script src="/assets/nav/js/bootstrap.min.js"></script>
    <script src="/assets/nav/js/jquery.sticky.js"></script>
    <script src="/assets/nav/js/main.js"></script>
  </body>
</html>