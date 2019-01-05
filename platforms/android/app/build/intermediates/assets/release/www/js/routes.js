routes = [
  {
    path: '/home/',
    url: './index.html',
  },
  {
    path: '/about/',
    url: './pages/about.html',
  },
  {
    path: '/store/',
    componentUrl: './pages/store.html',
  },
  {
    path: '/confirmuser/',
    url: './pages/confirmuser.html',
  },
  
  {
    path: '/catalogc/',
    componentUrl: './pages/catalogc.html',
  },
  {
    path: '/catalogb/',
    componentUrl: './pages/catalogb.html',
  },
  {
    path: '/orders/',
    componentUrl: './pages/orders.html',
  },
  {
    path: '/category/',
    cache:false,
    componentUrl: './pages/category.html',
  },
  {
    path: '/catalog/:cat/',
   // name:'catalog',
    cache:false,
    componentUrl: './pages/catalog.html',
  },
  {
    path: '/product/:id/',
    componentUrl: './pages/product.html',
  },
  {
    path: '/productdetails/',
    componentUrl: './pages/productdetails.html',
  },
  {
    path: '/productb/:id/',
    componentUrl: './pages/productb.html',
  },
  {
    path: '/ccart/',
    componentUrl: './pages/customercart.html',
  },
  {
    path: '/activepo/:code/',
    componentUrl: './pages/activepo.html',
  },
  {
    path: '/form/',
    url: './pages/form.html',
  },
  // Page Loaders & Router
  {
    //path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    path: '/page-loader-template7/:cat/',
    templateUrl: './pages/page-loader-template7.html',
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
  },

  {
    path: '/customerinfo/',
    url: './pages/customerinfo.html',
  },

  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
