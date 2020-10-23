(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    179: function (e, a, n) {},
    232: function (e, a, n) {},
    264: function (e, a, n) {},
    269: function (e, a, n) {},
    287: function (e, a, n) {},
    289: function (e, a, n) {},
    341: function (e, a, n) {
      e.exports = n(482);
    },
    474: function (e, a, n) {},
    475: function (e, a, n) {},
    476: function (e, a, n) {},
    477: function (e, a, n) {},
    478: function (e, a, n) {},
    479: function (e, a, n) {},
    480: function (e, a, n) {},
    481: function (e, a, n) {},
    482: function (e, a, n) {
      "use strict";
      n.r(a);
      var t = n(0),
        l = n.n(t),
        o = n(19),
        i = n.n(o),
        r = n(27),
        c = n(21),
        s = n(22),
        m = n(24),
        u = n(23),
        d = n(162),
        p = n.n(d),
        h = p.a.create({
          baseURL: "https://roarroar.herokuapp.com",
          withCredentials: !0,
        });
      function b(e) {
        if (e.response.data)
          throw (console.log(e.response && e.response.data), e);
        throw e;
      }
      var g = function (e) {
          return (
            console.log(e),
            h
              .post("/api/auth/signup", e)
              .then(function (e) {
                return e.data;
              })
              .catch(b)
          );
        },
        y = function (e) {
          return h
            .post("/api/auth/signin", e)
            .then(function (e) {
              return e.data;
            })
            .catch(b);
        },
        f = function () {
          return h
            .get("/api/auth/isLoggedIn")
            .then(function (e) {
              return e.data;
            })
            .catch(b);
        },
        v = function () {
          return h
            .get("/api/auth/logout")
            .then(function (e) {
              return e.data;
            })
            .catch(b);
        },
        E = function () {
          return h
            .get("/api/animal")
            .then(function (e) {
              return e.data;
            })
            .catch(b);
        },
        _ = function (e) {
          return h
            .post("/api/animal", e)
            .then(function (e) {
              return e.data;
            })
            .catch(b);
        },
        w = function (e, a) {
          return h
            .patch("/api/animal/".concat(e), a)
            .then(function (e) {
              return e.data;
            })
            .catch(b);
        },
        C = function (e, a) {
          return (
            console.log("id ==>", e),
            console.log("data ==>", a),
            h
              .patch("/api/user/".concat(e), a)
              .then(function (e) {
                return e.data;
              })
              .catch(b)
          );
        },
        S = function (e) {
          return h
            .get("/api/animal/filter/".concat(e))
            .then(function (e) {
              return e.data;
            })
            .catch(b);
        },
        k = function (e) {
          return h
            .get("/api/animal/filterId/".concat(e))
            .then(function (e) {
              return e.data;
            })
            .catch(b);
        },
        N = function (e, a) {
          return h.get(e + a);
        },
        A = function (e) {
          return h.delete("/api/animal/" + e);
        },
        O = l.a.createContext(),
        R = (function (e) {
          Object(m.a)(n, e);
          var a = Object(u.a)(n);
          function n() {
            var e;
            Object(c.a)(this, n);
            for (var t = arguments.length, l = new Array(t), o = 0; o < t; o++)
              l[o] = arguments[o];
            return (
              ((e = a.call.apply(a, [this].concat(l))).state = {
                user: null,
                isLoggedIn: !1,
                isLoading: !0,
                isAdmin: !1,
              }),
              (e.setUser = function (a) {
                e.setState({ user: a, isLoggedIn: !0 });
              }),
              (e.removeUser = function () {
                e.setState({ user: null, isLoggedIn: !1 });
              }),
              e
            );
          }
          return (
            Object(s.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  f()
                    .then(function (a) {
                      e.setState({
                        user: a,
                        isLoggedIn: !0,
                        isLoading: !1,
                        isAdmin: a.admin,
                      });
                    })
                    .catch(function (a) {
                      e.setState({ user: null, isLoggedIn: !1, isLoading: !1 });
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = {
                    user: this.state.user,
                    setUser: this.setUser,
                    removeUser: this.removeUser,
                    isLoggedIn: this.state.isLoggedIn,
                    isLoading: this.state.isLoading,
                    isAdmin: this.state.isAdmin,
                  };
                  return l.a.createElement(
                    O.Provider,
                    { value: e },
                    this.props.children
                  );
                },
              },
            ]),
            n
          );
        })(t.Component),
        x = n(32),
        I = function (e) {
          return function (a) {
            return l.a.createElement(O.Consumer, null, function (n) {
              return l.a.createElement(e, Object.assign({}, a, { context: n }));
            });
          };
        },
        P = n(169),
        j = n(132),
        T = I(function (e) {
          var a = e.context;
          return l.a.createElement(
            P.a,
            {
              sticky: "top",
              collapseOnSelect: !0,
              expand: "lg",
              variant: "light",
              style: { backgroundColor: "transparent" },
            },
            l.a.createElement(
              P.a.Brand,
              { href: "/" },
              l.a.createElement("img", {
                src:
                  "https://res.cloudinary.com/dxgllmny2/image/upload/v1602864519/roarLogo_vq5loi.png",
                alt: "Logo-Roar",
                className: "roarLogo",
                style: { width: "10vw", marginRight:"5%" },
              })
            ),
            l.a.createElement(P.a.Toggle, {
              "aria-controls": "responsive-navbar-nav",
            }),
            l.a.createElement(
              P.a.Collapse,
              { id: "responsive-navbar-nav" },
              l.a.createElement(j.a, { className: "mr-auto" }),
              l.a.createElement(
                j.a,
                null,
                l.a.createElement(
                  j.a.Link,
                  { eventKey: 4 },
                  a.isAdmin &&
                    l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(
                        "li",
                        null,
                        l.a.createElement(
                          r.c,
                          { to: "/ManageAnimals" },
                          "Manage Animals"
                        )
                      )
                    )
                ),
                l.a.createElement(
                  j.a.Link,
                  { eventKey: 3 },
                  a.isAdmin &&
                    l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(
                        "li",
                        null,
                        l.a.createElement(
                          r.c,
                          { to: "/CreateAnimals" },
                          "Create Animals"
                        )
                      )
                    )
                ),
                l.a.createElement(
                  j.a.Link,
                  null,
                  a.isLoggedIn &&
                    l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(
                        "li",
                        null,
                        l.a.createElement(
                          r.c,
                          { to: "/profile" },
                          a.user && a.user.email
                        )
                      )
                    ),
                  !a.isLoggedIn &&
                    l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(
                        "li",
                        null,
                        l.a.createElement(r.c, { to: "/signin" }, "Log in")
                      )
                    )
                ),
                l.a.createElement(
                  j.a.Link,
                  { eventKey: 2 },
                  !a.isLoggedIn &&
                    l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(
                        "li",
                        null,
                        l.a.createElement(
                          r.c,
                          { to: "/signup" },
                          "Create account"
                        )
                      )
                    ),
                  a.isLoggedIn &&
                    l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(
                        "li",
                        null,
                        l.a.createElement(
                          "p",
                          {
                            onClick: function () {
                              v()
                                .then(function () {
                                  a.removeUser();
                                })
                                .catch(function (e) {
                                  console.log(e);
                                });
                            },
                          },
                          "Logout"
                        )
                      )
                    )
                )
              )
            )
          );
        }),
        M = (function (e) {
          Object(m.a)(n, e);
          var a = Object(u.a)(n);
          function n() {
            return Object(c.a)(this, n), a.apply(this, arguments);
          }
          return (
            Object(s.a)(n, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "div",
                    { className: "whatwedo" },
                    l.a.createElement("h1", null, "What we do :"),
                    l.a.createElement(
                      "p",
                      null,
                      "R.O.A.R. (Reach Out And Rescue) is a conservation charity dedicated to rescuing and preserving the wildlife of Namibia. Originating as a small wildlife sanctuary nestled in the Namibian bush, R.O.A.R. is now a world-famous conservation organisation. The R.O.A.R. Sanctuary provides a safe haven and second chance for countless injured, orphaned and conflict animals. Wherever possible our aim is to release animals back into the wild. Our mission is to conserve the land, cultures and wildlife of Namibia, Africa. We aim to achieve this through encouraging participation, education and scientific research."
                    )
                  );
                },
              },
            ]),
            n
          );
        })(t.Component),
        D = (function (e) {
          Object(m.a)(n, e);
          var a = Object(u.a)(n);
          function n() {
            return Object(c.a)(this, n), a.apply(this, arguments);
          }
          return (
            Object(s.a)(n, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "div",
                    { className: "kpis" },
                    l.a.createElement(
                      "div",
                      { className: "wrapper" },
                      l.a.createElement(
                        "div",
                        { class: "kpi" },
                        l.a.createElement("span", { className: "num" }, "247"),
                        l.a.createElement("br", null),
                        "animals have been rescued by R.O.A.R. since its creation."
                      ),
                      l.a.createElement(
                        "div",
                        { class: "kpi" },
                        l.a.createElement("span", { className: "num" }, "44"),
                        l.a.createElement("br", null),
                        "staff members work tirelessly at the Sanctuary all year round."
                      ),
                      l.a.createElement(
                        "div",
                        { class: "kpi" },
                        l.a.createElement("span", { className: "num" }, "36"),
                        l.a.createElement("br", null),
                        "different wildlife species have been taken care of at the Sanctuary."
                      ),
                      l.a.createElement(
                        "div",
                        { class: "kpi" },
                        l.a.createElement(
                          "span",
                          { className: "num" },
                          "37,568"
                        ),
                        l.a.createElement("br", null),
                        "donators helped us last year through sponsorships and adoptions."
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(t.Component),
        L = n(116),
        F = n(571),
        B =
          (n(264),
          (function (e) {
            Object(m.a)(n, e);
            var a = Object(u.a)(n);
            function n() {
              var e;
              Object(c.a)(this, n);
              for (
                var t = arguments.length, l = new Array(t), o = 0;
                o < t;
                o++
              )
                l[o] = arguments[o];
              return (
                ((e = a.call.apply(a, [this].concat(l))).state = {
                  species: [],
                  animals: [],
                  animalcheck: [],
                }),
                (e.componentDidMount = function () {
                  var a = [];
                  E("/")
                    .then(function (n) {
                      n.map(function (e) {
                        return a.push(e.specie);
                      });
                      var t = a.filter(function (e, a, n) {
                        return n.indexOf(e) === a;
                      });
                      e.setState({ animals: n, species: t });
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
                }),
                (e.handleCheck = function (a, n) {
                  var t = n.value;
                  Object(L.a)(e.state.animalcheck);
                  if (!e.state.animalcheck.includes(t)) {
                    var l = Object(L.a)(e.state.animalcheck);
                    return (
                      l.push(t),
                      e.setState({ animalcheck: l }),
                      S("".concat(l))
                        .then(function (a) {
                          e.setState({ animals: a });
                        })
                        .catch(function (e) {
                          console.log(e);
                        }),
                      l
                    );
                  }
                  var o = e.state.animalcheck.filter(function (e) {
                    return e !== t;
                  });
                  0 === o.length && (o = e.state.species),
                    console.log(o),
                    console.log(o.length),
                    e.setState({ animalcheck: o }),
                    S("".concat(o))
                      .then(function (a) {
                        e.setState({ animals: a });
                      })
                      .catch(function (e) {
                        console.log(e);
                      });
                }),
                e
              );
            }
            return (
              Object(s.a)(n, [
                {
                  key: "render",
                  value: function () {
                    var e = this;
                    return l.a.createElement(
                      "div",
                      { className: "Filter-Animals" },
                      l.a.createElement(
                        "div",
                        {
                          style: {
                            padding: "1vw 3vw",
                            backgroundColor: "#455",
                            margin: "3% 0%",
                          },
                        },
                        l.a.createElement(
                          "ul",
                          {
                            class: "nav nav-pills nav-fill",
                            "data-toggle": "pill",
                          },
                          this.state.species.map(function (a, n) {
                            return l.a.createElement(
                              "li",
                              {
                                class: "nav-item",
                                "data-toggle": "pill",
                                style: { color: "white" },
                              },
                              l.a.createElement(F.a, {
                                value: a,
                                onChange: e.handleCheck,
                              }),
                              " ",
                              a
                            );
                          })
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { className: "animalGrid" },
                        this.state.animals.map(function (e) {
                          return l.a.createElement(
                            "div",
                            { className: "animalCards" },
                            l.a.createElement("img", {
                              src: e.profileImage,
                              alt: "Animal Portrait",
                              className: "animalPhoto",
                            }),
                            l.a.createElement(
                              "h2",
                              { className: "animalName" },
                              e.name
                            ),
                            l.a.createElement(
                              "div",
                              { class: "overlay" },
                              l.a.createElement(
                                "div",
                                { class: "text-overlay" },
                                l.a.createElement(
                                  r.b,
                                  {
                                    to: "/".concat(e._id),
                                    className: "meetLink",
                                  },
                                  "Meet ",
                                  e.name
                                )
                              )
                            )
                          );
                        })
                      )
                    );
                  },
                },
              ]),
              n
            );
          })(l.a.Component)),
        G = (function (e) {
          Object(m.a)(n, e);
          var a = Object(u.a)(n);
          function n() {
            return Object(c.a)(this, n), a.apply(this, arguments);
          }
          return (
            Object(s.a)(n, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "div",
                    null,
                    l.a.createElement(
                      "div",
                      { className: "home" },
                      l.a.createElement(T, null),
                      l.a.createElement(
                        "div",
                        { "data-aos": "fade-up" },
                        l.a.createElement("h1", null, "R.O.A.R."),
                        l.a.createElement("h2", null, "Reach Out And Rescue")
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { "data-aos": "fade-up" },
                      l.a.createElement(M, null)
                    ),
                    l.a.createElement(
                      "div",
                      { "data-aos": "fade-up" },
                      l.a.createElement(D, null)
                    ),
                    l.a.createElement(
                      "div",
                      { "data-aos": "fade-up" },
                      l.a.createElement(B, null)
                    )
                  );
                },
              },
            ]),
            n
          );
        })(l.a.Component),
        K = n(72),
        U =
          (n(232),
          (function (e) {
            Object(m.a)(n, e);
            var a = Object(u.a)(n);
            function n() {
              var e;
              Object(c.a)(this, n);
              for (
                var t = arguments.length, l = new Array(t), o = 0;
                o < t;
                o++
              )
                l[o] = arguments[o];
              return (
                ((e = a.call.apply(a, [this].concat(l))).state = {
                  email: "",
                  password: "",
                }),
                (e.handleChange = function (a) {
                  var n = a.target.name,
                    t =
                      "file" === a.target.type
                        ? a.target.files[0]
                        : "checkbox" === a.target.type
                        ? a.target.checked
                        : a.target.value;
                  e.setState(Object(K.a)({}, n, t));
                }),
                (e.handleSubmit = function (a) {
                  a.preventDefault(),
                    y(e.state)
                      .then(function (a) {
                        e.context.setUser(a), e.props.history.push("/");
                      })
                      .catch(function (e) {
                        console.log(e);
                      });
                }),
                e
              );
            }
            return (
              Object(s.a)(n, [
                {
                  key: "render",
                  value: function () {
                    return l.a.createElement(
                      "form",
                      {
                        onChange: this.handleChange,
                        onSubmit: this.handleSubmit,
                        className: "signinForm",
                      },
                      l.a.createElement(
                        "label",
                        { htmlFor: "email", className: "formSI" },
                        "Email"
                      ),
                      l.a.createElement("input", {
                        type: "email",
                        id: "email",
                        name: "email",
                        className: "formSI2",
                      }),
                      l.a.createElement(
                        "label",
                        { htmlFor: "password", className: "formSI" },
                        "Password"
                      ),
                      l.a.createElement("input", {
                        type: "password",
                        id: "password",
                        name: "password",
                        className: "formSI2",
                      }),
                      l.a.createElement(
                        "button",
                        { className: "sub-btn" },
                        "Submit"
                      )
                    );
                  },
                },
              ]),
              n
            );
          })(t.Component));
      U.contextType = O;
      var H = Object(x.g)(U),
        V = function (e) {
          return l.a.createElement(
            "div",
            { className: "signinPage" },
            l.a.createElement(T, null),
            l.a.createElement(H, null)
          );
        },
        W = n(554),
        z = n(560),
        Y = n(244),
        $ = n(562),
        q =
          (n(269),
          (function (e) {
            Object(m.a)(n, e);
            var a = Object(u.a)(n);
            function n() {
              var e;
              Object(c.a)(this, n);
              for (
                var t = arguments.length, l = new Array(t), o = 0;
                o < t;
                o++
              )
                l[o] = arguments[o];
              return (
                ((e = a.call.apply(a, [this].concat(l))).state = {
                  componentSize: "default",
                  email: "",
                  password: "",
                  firstname: "",
                  lastname: "",
                }),
                (e.onFormLayoutChange = function (a) {
                  var n = a.size;
                  e.setState({ componentSize: n });
                }),
                (e.handleChange = function (a) {
                  var n =
                      "file" === a.target.type
                        ? a.target.files[0]
                        : "checkbox" === a.target.type
                        ? a.target.checked
                        : a.target.value,
                    t = a.target.name;
                  e.setState(Object(K.a)({}, t, n));
                }),
                (e.handleSubmit = function (a) {
                  g(e.state)
                    .then(function (a) {
                      e.context.setUser(a), e.props.history.push("/");
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
                }),
                e
              );
            }
            return (
              Object(s.a)(n, [
                {
                  key: "render",
                  value: function () {
                    return l.a.createElement(
                      l.a.Fragment,
                      null,
                      l.a.createElement(
                        W.a,
                        {
                          labelCol: { span: 4 },
                          wrapperCol: { span: 14 },
                          layout: "vertical",
                          initialValues: { size: this.state.componentSize },
                          onValuesChange: this.onFormLayoutChange,
                          size: this.state.componentSize,
                          onChange: this.handleChange,
                          style: { paddingLeft: "50%", paddingTop: "10%" },
                        },
                        l.a.createElement(
                          W.a.Item,
                          { label: "", style: { fontSize: "150%" } },
                          "First Name",
                          l.a.createElement(z.a, { name: "firstname" })
                        ),
                        l.a.createElement(
                          W.a.Item,
                          { label: "", style: { fontSize: "150%" } },
                          "Last Name",
                          l.a.createElement(z.a, { name: "lastname" })
                        ),
                        l.a.createElement(
                          W.a.Item,
                          {
                            label: "",
                            style: { fontSize: "150%" },
                            rules: [{ type: "email" }],
                          },
                          "Email",
                          l.a.createElement(z.a, { name: "email" })
                        ),
                        l.a.createElement(
                          W.a.Item,
                          {
                            label: "",
                            style: { fontSize: "150%" },
                            rules: [{ type: "password" }],
                          },
                          "Password",
                          l.a.createElement(z.a, {
                            name: "password",
                            prefix: l.a.createElement($.a, {
                              className: "site-form-item-icon",
                            }),
                            type: "password",
                            placeholder: "Password",
                          })
                        ),
                        l.a.createElement(
                          W.a.Item,
                          { label: "" },
                          l.a.createElement(
                            Y.a,
                            { onClick: this.handleSubmit },
                            "Submit"
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              n
            );
          })(l.a.Component));
      q.contextType = O;
      var Z = Object(x.g)(q),
        J = function (e) {
          return l.a.createElement(
            "div",
            { className: "signupPage" },
            l.a.createElement(T, null),
            l.a.createElement(Z, null)
          );
        },
        Q = n(220),
        X = I(function (e) {
          var a = e.component,
            n = e.context,
            t = Object(Q.a)(e, ["component", "context"]);
          return n.isLoading
            ? null
            : n.isLoggedIn
            ? l.a.createElement(
                x.b,
                Object.assign({}, t, {
                  render: function (e) {
                    return l.a.createElement(a, e);
                  },
                })
              )
            : l.a.createElement(x.a, { to: "/signin" });
        }),
        ee = (n(287), n(559)),
        ae = n(556),
        ne = n(568),
        te = (function (e) {
          Object(m.a)(n, e);
          var a = Object(u.a)(n);
          function n() {
            var e;
            Object(c.a)(this, n);
            for (var t = arguments.length, l = new Array(t), o = 0; o < t; o++)
              l[o] = arguments[o];
            return (
              ((e = a.call.apply(a, [this].concat(l))).state = {
                activeItem: "Favorites",
                sponsored: e.context.user.sponsoring,
                adopted: e.context.user.adoption,
                favorites: e.context.user.favoriteAnimal,
                favoriteDisplay: [],
              }),
              (e.componentDidMount = function () {
                k("".concat(e.state.favorites))
                  .then(function (a) {
                    e.setState({ favoriteDisplay: a }), console.log(a);
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              }),
              (e.handleItemClick = function (a, n) {
                var t = n.name;
                e.setState({ activeItem: t }),
                  "Adopted" === t
                    ? 0 === e.state.adopted.length
                      ? e.setState({ favoriteDisplay: [] })
                      : k("".concat(e.state.adopted))
                          .then(function (a) {
                            e.setState({ favoriteDisplay: a }), console.log(a);
                          })
                          .catch(function (e) {
                            console.log(e);
                          })
                    : "Sponsored" === t
                    ? 0 === e.state.sponsored.length
                      ? e.setState({ favoriteDisplay: [] })
                      : k("".concat(e.state.sponsored))
                          .then(function (a) {
                            e.setState({ favoriteDisplay: a }), console.log(a);
                          })
                          .catch(function (e) {
                            console.log(e);
                          })
                    : 0 === e.state.sponsored.favorites
                    ? e.setState({ favoriteDisplay: [] })
                    : k("".concat(e.state.favorites))
                        .then(function (a) {
                          e.setState({ favoriteDisplay: a }), console.log(a);
                        })
                        .catch(function (e) {
                          console.log(e);
                        });
              }),
              e
            );
          }
          return (
            Object(s.a)(n, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "div",
                    { className: "profilePage" },
                    l.a.createElement(T, null),
                    l.a.createElement(
                      ee.a.Group,
                      { style: { margin: "5vh 5vw" } },
                      l.a.createElement(
                        ee.a,
                        null,
                        l.a.createElement(ee.a.Image, {
                          size: "small",
                          src:
                            "https://res.cloudinary.com/dxgllmny2/image/upload/v1603200377/clipart1717870_dcec3q.png",
                          alt: "",
                        }),
                        l.a.createElement(
                          ee.a.Content,
                          null,
                          l.a.createElement(
                            ee.a.Header,
                            { as: "a", style: { fontSize: "250%" } },
                            this.context.user.firstname,
                            " ",
                            this.context.user.lastname
                          ),
                          l.a.createElement(
                            ee.a.Description,
                            { style: { fontSize: "150%" } },
                            l.a.createElement(
                              "p",
                              null,
                              this.context.user.email
                            ),
                            l.a.createElement(
                              "p",
                              null,
                              this.context.user.adress
                            ),
                            l.a.createElement(
                              "p",
                              null,
                              this.context.user.phone
                            )
                          )
                        )
                      )
                    ),
                    l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(
                        ae.a,
                        {
                          pointing: !0,
                          color: "blue",
                          style: {
                            margin: "5vh 5vw",
                            background: "transparent",
                          },
                        },
                        l.a.createElement(ae.a.Item, {
                          name: "Favorites",
                          active: "Favorites" === this.state.activeItem,
                          onClick: this.handleItemClick,
                        }),
                        l.a.createElement(ae.a.Item, {
                          name: "Adopted",
                          active: "Adopted" === this.state.activeItem,
                          onClick: this.handleItemClick,
                        }),
                        l.a.createElement(ae.a.Item, {
                          name: "Sponsored",
                          active: "Sponsored" === this.state.activeItem,
                          onClick: this.handleItemClick,
                        })
                      ),
                      l.a.createElement(
                        ne.a,
                        {
                          style: {
                            margin: "0vh 5vw",
                            background: "transparent",
                          },
                        },
                        l.a.createElement(
                          "div",
                          { className: "animalGridProfile" },
                          this.state.favoriteDisplay.map(function (e, a) {
                            return l.a.createElement(
                              "div",
                              { key: a, className: "animalCardsProfile" },
                              l.a.createElement("img", {
                                src: e.profileImage,
                                alt: "Animal Portrait",
                                className: "animalPhotoProfile",
                              }),
                              l.a.createElement(
                                "h2",
                                { className: "animalNameProfile" },
                                e.name
                              ),
                              l.a.createElement(
                                "div",
                                { className: "overlayProfile" },
                                l.a.createElement(
                                  "div",
                                  { className: "text-overlayProfile" },
                                  l.a.createElement(
                                    r.b,
                                    {
                                      to: "/".concat(e._id),
                                      className: "meetLinkProfile",
                                    },
                                    "Meet ",
                                    e.name
                                  )
                                )
                              )
                            );
                          })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(l.a.Component);
      te.contextType = O;
      var le = I(te),
        oe = n(307),
        ie = n.n(oe),
        re = (n(470), n(471), n(472), n(473), n(553)),
        ce = n(564),
        se = [
          { key: "m", text: "Male", value: "Male" },
          { key: "f", text: "Female", value: "Female" },
        ],
        me = (function (e) {
          Object(m.a)(n, e);
          var a = Object(u.a)(n);
          function n() {
            var e;
            Object(c.a)(this, n);
            for (var t = arguments.length, l = new Array(t), o = 0; o < t; o++)
              l[o] = arguments[o];
            return (
              ((e = a.call.apply(a, [this].concat(l))).state = {
                name: "",
                profileImage: "",
                age: "",
                specie: "",
                description: "",
                ConservationStatus: "",
                gender: "",
              }),
              (e.componentDidMount = function () {
                "edit" === e.props.action &&
                  (console.log(e.props),
                  N("/api/animal/", e.props.id)
                    .then(function (a) {
                      console.log(a),
                        e.setState({
                          name: a.data.name,
                          description: a.data.description,
                          age: a.data.age,
                          specie: a.data.specie,
                          gender: a.data.gender,
                          ConservationStatus: a.data.ConservationStatus,
                          profileImage: a.data.profileImage,
                        });
                    })
                    .catch(function (e) {
                      return console.log(e);
                    }));
              }),
              (e.handleChange = function (a) {
                var n =
                    "file" === a.target.type
                      ? a.target.files[0].name
                      : "checkbox" === a.target.type
                      ? a.target.checked
                      : a.target.value,
                  t = a.target.name;
                e.setState(Object(K.a)({}, t, n));
              }),
              (e.handleSelectChange = function (a, n) {
                var t = n.value;
                e.setState({ gender: t });
              }),
              (e.handleRadioChange = function (a, n) {
                var t = n.value;
                e.setState({ ConservationStatus: t });
              }),
              (e.handleSubmit = function (a) {
                if ("edit" === e.props.action) {
                  var n = new FormData();
                  for (var t in e.state) n.append(t, e.state[t]);
                  console.log("=======>", n),
                    w(e.props.id, n)
                      .then(function () {
                        e.props.history.push("/");
                      })
                      .catch(function (e) {
                        console.log(e);
                      });
                } else {
                  var l = new FormData();
                  for (var o in e.state) l.append(o, e.state[o]);
                  _(l)
                    .then(function () {
                      e.props.history.push("/");
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
                }
              }),
              e
            );
          }
          return (
            Object(s.a)(n, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "div",
                    null,
                    l.a.createElement(
                      re.a,
                      { style: { padding: "15%" } },
                      l.a.createElement(
                        re.a.Group,
                        { widths: "equal" },
                        l.a.createElement(re.a.Input, {
                          fluid: !0,
                          label: "Name",
                          placeholder: "Name",
                          name: "name",
                          onChange: this.handleChange,
                          value: this.state.name,
                        }),
                        l.a.createElement(re.a.Input, {
                          fluid: !0,
                          label: "Age",
                          placeholder: "Age",
                          name: "age",
                          onChange: this.handleChange,
                          value: this.state.age,
                        }),
                        l.a.createElement(re.a.Input, {
                          fluid: !0,
                          label: "Specie",
                          placeholder: "Specie",
                          name: "specie",
                          onChange: this.handleChange,
                          value: this.state.specie,
                        }),
                        l.a.createElement(re.a.Select, {
                          fluid: !0,
                          label: "Gender",
                          options: se,
                          placeholder: "Gender",
                          name: "gender",
                          onChange: this.handleSelectChange,
                          value: this.state.gender,
                        })
                      ),
                      l.a.createElement(
                        re.a.Group,
                        { inline: !0 },
                        l.a.createElement("label", null, "Conservation Status"),
                        l.a.createElement(re.a.Radio, {
                          label: "Critical",
                          value: "Critical",
                          checked: "Critical" === this.state.ConservationStatus,
                          name: "ConservationStatus",
                          onChange: this.handleRadioChange,
                        }),
                        l.a.createElement(re.a.Radio, {
                          label: "Vulnerable",
                          value: "Vulnerable",
                          checked:
                            "Vulnerable" === this.state.ConservationStatus,
                          name: "ConservationStatus",
                          onChange: this.handleRadioChange,
                        }),
                        l.a.createElement(re.a.Radio, {
                          label: "Least Concerned",
                          value: "Least Concerned",
                          checked:
                            "Least Concerned" === this.state.ConservationStatus,
                          name: "ConservationStatus",
                          onChange: this.handleRadioChange,
                        }),
                        l.a.createElement(re.a.Radio, {
                          label: "Near Threatened",
                          value: "Near Threatened",
                          checked:
                            "Near Threatened" === this.state.ConservationStatus,
                          name: "ConservationStatus",
                          onChange: this.handleRadioChange,
                        }),
                        l.a.createElement(re.a.Radio, {
                          label: "Data Deficient",
                          value: "Data Deficient",
                          checked:
                            "Data Deficient" === this.state.ConservationStatus,
                          name: "ConservationStatus",
                          onChange: this.handleRadioChange,
                        }),
                        l.a.createElement(re.a.Radio, {
                          label: "Endangered",
                          value: "Endangered",
                          checked:
                            "Endangered" === this.state.ConservationStatus,
                          name: "ConservationStatus",
                          onChange: this.handleRadioChange,
                        })
                      ),
                      l.a.createElement(re.a.TextArea, {
                        label: "Description",
                        placeholder: "Tell us more about our new companion...",
                        onChange: this.handleChange,
                        name: "description",
                        value: this.state.description,
                      }),
                      l.a.createElement(
                        ce.a,
                        { as: "label", htmlFor: "file", type: "button" },
                        "Upload a cute face"
                      ),
                      l.a.createElement(re.a.Input, {
                        type: "file",
                        id: "file",
                        style: { visibility: "hidden" },
                        onChange: this.handleChange,
                        name: "profileImage",
                      }),
                      l.a.createElement(
                        re.a.Button,
                        { onClick: this.handleSubmit },
                        "Submit"
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(t.Component),
        ue = Object(x.g)(me),
        de = (function (e) {
          Object(m.a)(n, e);
          var a = Object(u.a)(n);
          function n() {
            return Object(c.a)(this, n), a.apply(this, arguments);
          }
          return (
            Object(s.a)(n, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "div",
                    { className: "createanimals" },
                    l.a.createElement(T, null),
                    l.a.createElement("div", null, l.a.createElement(ue, null))
                  );
                },
              },
            ]),
            n
          );
        })(l.a.Component),
        pe = function (e) {
          return l.a.createElement(
            "div",
            { className: "createanimals" },
            l.a.createElement(T, null),
            l.a.createElement(
              "div",
              null,
              l.a.createElement(ue, { action: "edit", id: e.match.params.id })
            )
          );
        },
        he = n(561),
        be = n(159),
        ge = (function (e) {
          Object(m.a)(n, e);
          var a = Object(u.a)(n);
          function n() {
            var e;
            Object(c.a)(this, n);
            for (var t = arguments.length, l = new Array(t), o = 0; o < t; o++)
              l[o] = arguments[o];
            return (
              ((e = a.call.apply(a, [this].concat(l))).state = { animals: [] }),
              (e.componentDidMount = function () {
                E("/")
                  .then(function (a) {
                    console.log(a), e.setState({ animals: a });
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              }),
              (e.deleteAnimal = function (e) {
                console.log(e),
                  A("/" + e).catch(function (e) {
                    console.log(e);
                  });
              }),
              e
            );
          }
          return (
            Object(s.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this;
                  return l.a.createElement(
                    "div",
                    null,
                    l.a.createElement(T, null),
                    l.a.createElement(
                      "div",
                      { className: "table-manage" },
                      l.a.createElement(
                        "div",
                        null,
                        l.a.createElement(
                          he.a,
                          { celled: !0, compact: !0, definition: !0 },
                          l.a.createElement(
                            he.a.Header,
                            { fullWidth: !0 },
                            l.a.createElement(
                              he.a.Row,
                              null,
                              l.a.createElement(he.a.HeaderCell, null),
                              l.a.createElement(
                                he.a.HeaderCell,
                                null,
                                "Profile Image"
                              ),
                              l.a.createElement(he.a.HeaderCell, null, "Name"),
                              l.a.createElement(
                                he.a.HeaderCell,
                                null,
                                "Description"
                              ),
                              l.a.createElement(he.a.HeaderCell, null, "Edit")
                            )
                          ),
                          l.a.createElement(
                            he.a.Body,
                            null,
                            this.state.animals.map(function (a, n) {
                              return l.a.createElement(
                                he.a.Row,
                                { key: n },
                                l.a.createElement(
                                  he.a.Cell,
                                  { collapsing: !0 },
                                  l.a.createElement(be.a, {
                                    onClick: function () {
                                      return e.deleteAnimal(a._id);
                                    },
                                    name: "trash alternate",
                                  })
                                ),
                                l.a.createElement(
                                  he.a.Cell,
                                  { style: { width: "20%" } },
                                  " ",
                                  l.a.createElement("img", {
                                    style: {
                                      width: "100%",
                                      borderRadius: "10px",
                                    },
                                    src: a.profileImage,
                                    alt: "animal",
                                  })
                                ),
                                l.a.createElement(he.a.Cell, null, a.name),
                                l.a.createElement(
                                  he.a.Cell,
                                  null,
                                  a.description
                                ),
                                l.a.createElement(
                                  he.a.Cell,
                                  null,
                                  " ",
                                  l.a.createElement(
                                    r.b,
                                    { to: "/Animals/".concat(a._id, "/edit") },
                                    l.a.createElement(be.a, { name: "edit" })
                                  )
                                )
                              );
                            })
                          ),
                          l.a.createElement(
                            he.a.Footer,
                            { fullWidth: !0 },
                            l.a.createElement(
                              he.a.Row,
                              null,
                              l.a.createElement(he.a.HeaderCell, null),
                              l.a.createElement(
                                he.a.HeaderCell,
                                { colSpan: "4" },
                                l.a.createElement(
                                  ce.a,
                                  {
                                    floated: "right",
                                    icon: !0,
                                    labelPosition: "left",
                                    primary: !0,
                                    size: "small",
                                  },
                                  l.a.createElement(be.a, { name: "user" }),
                                  " ",
                                  l.a.createElement(
                                    "a",
                                    { href: "/Createanimals" },
                                    "Add Animal"
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(t.Component),
        ye = n(569),
        fe =
          (n(289),
          (function (e) {
            Object(m.a)(n, e);
            var a = Object(u.a)(n);
            function n() {
              var e;
              Object(c.a)(this, n);
              for (
                var t = arguments.length, l = new Array(t), o = 0;
                o < t;
                o++
              )
                l[o] = arguments[o];
              return (
                ((e = a.call.apply(a, [this].concat(l))).state = {
                  animal: "",
                  color: "",
                }),
                (e.componentDidMount = function () {
                  console.log(e.context),
                    e.context.isLoggedIn &&
                      (e.context.user.favoriteAnimal.includes(e.props.id)
                        ? e.setState({ color: "red" })
                        : e.setState({ color: "black" })),
                    console.log(e.state.color),
                    N("/api/animal/", e.props.id)
                      .then(function (a) {
                        console.log(a), e.setState({ animal: a.data });
                      })
                      .catch(function (e) {
                        console.log(e);
                      });
                }),
                (e.handleFavorite = function (a) {
                  console.log(e.context.user, e.props.id);
                  var n = Object(L.a)(e.context.user.favoriteAnimal);
                  if ("black" === e.state.color)
                    n.push(e.props.id),
                      e.setState({ color: "red" }),
                      (e.context.user.favoriteAnimal = n),
                      C(e.context.user._id, e.context.user).catch(function (e) {
                        console.log(e);
                      });
                  else {
                    var t = n.filter(function (a) {
                      return a !== e.props.id;
                    });
                    e.setState({ color: "black" }),
                      (e.context.user.favoriteAnimal = t),
                      C(e.context.user._id, e.context.user).catch(function (e) {
                        console.log(e);
                      });
                  }
                }),
                e
              );
            }
            return (
              Object(s.a)(n, [
                {
                  key: "render",
                  value: function () {
                    var e = this;
                    return l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(
                        "div",
                        { className: "animalDetails" },
                        l.a.createElement(
                          ye.a,
                          { stackable: !0, columns: 3 },
                          l.a.createElement(
                            ye.a.Column,
                            { width: 4 },
                            l.a.createElement("img", {
                              src: this.state.animal.profileImage,
                              alt: "Animal Portrait",
                              className: "animalPortrait",
                            })
                          ),
                          l.a.createElement(
                            ye.a.Column,
                            { width: 9 },
                            l.a.createElement(
                              "div",
                              { className: "mid-part" },
                              l.a.createElement(
                                "h2",
                                { className: "name" },
                                this.state.animal.name
                              ),
                              l.a.createElement(
                                "div",
                                { className: "ani-id" },
                                l.a.createElement(
                                  "div",
                                  { className: "specie" },
                                  l.a.createElement(
                                    "p",
                                    null,
                                    l.a.createElement(
                                      "span",
                                      { className: "bold" },
                                      "Specie :"
                                    )
                                  ),
                                  l.a.createElement(
                                    "p",
                                    null,
                                    this.state.animal.specie
                                  )
                                )
                              ),
                              l.a.createElement(
                                "div",
                                { className: "ani-id desc" },
                                l.a.createElement(
                                  "p",
                                  null,
                                  l.a.createElement(
                                    "span",
                                    { className: "bold" },
                                    "About :"
                                  )
                                ),
                                l.a.createElement(
                                  "p",
                                  null,
                                  this.state.animal.description
                                )
                              )
                            )
                          ),
                          l.a.createElement(
                            ye.a.Column,
                            { width: 3 },
                            this.context.isLoggedIn &&
                              l.a.createElement(be.a, {
                                style: { cursor: "pointer" },
                                name: "heart",
                                className: "iconHeart",
                                color: this.state.color,
                                onClick: function () {
                                  return e.handleFavorite();
                                },
                              }),
                            l.a.createElement(
                              "div",
                              { className: "ani-id" },
                              l.a.createElement(
                                "p",
                                null,
                                l.a.createElement(
                                  "span",
                                  { className: "bold" },
                                  "Age :"
                                )
                              ),
                              l.a.createElement(
                                "p",
                                null,
                                this.state.animal.age
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { className: "ani-id" },
                              l.a.createElement(
                                "p",
                                null,
                                l.a.createElement(
                                  "span",
                                  { className: "bold" },
                                  "Gender :"
                                )
                              ),
                              l.a.createElement(
                                "p",
                                null,
                                this.state.animal.gender
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { className: "ani-id" },
                              l.a.createElement(
                                "p",
                                null,
                                l.a.createElement(
                                  "span",
                                  { className: "bold" },
                                  "Conservation Status :"
                                )
                              ),
                              l.a.createElement(
                                "p",
                                null,
                                this.state.animal.ConservationStatus
                              )
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { className: "sponsorship" },
                        l.a.createElement(
                          "div",
                          { className: "why-sponsor" },
                          l.a.createElement(
                            "h1",
                            { className: "why" },
                            "Sponsor ",
                            this.state.animal.name,
                            " now !"
                          ),
                          l.a.createElement(
                            "h2",
                            { className: "why2" },
                            "Why sponsor an animal?"
                          ),
                          l.a.createElement(
                            "p",
                            { className: "text-sponsor" },
                            "Today, R.O.A.R. needs your support so it can take things even further: now you can sponsor the animal of your choice and help to protect an endangered species! Thanks to your donation, you\u2019ll be contributing to the well-being of the animals at the Sanctuary (veterinary equipment or enclosures, animal food, environmental enrichment programmes, various expenses) or the protection of endangered species in their native habitats (on-site conservation programmes)."
                          )
                        ),
                        l.a.createElement(
                          "div",
                          { className: "grid" },
                          l.a.createElement(
                            ye.a,
                            { stackable: !0, columns: 4 },
                            l.a.createElement(
                              ye.a.Column,
                              { width: 4 },
                              l.a.createElement(
                                "div",
                                { className: "sponsor" },
                                this.state.animal.adopted &&
                                  l.a.createElement(
                                    "div",
                                    { class: "overlay" },
                                    l.a.createElement(
                                      "div",
                                      { class: "text-overlay" },
                                      l.a.createElement(
                                        r.b,
                                        { to: "/", className: "meetLink" },
                                        "Already adopted!"
                                      )
                                    )
                                  ),
                                l.a.createElement(
                                  r.b,
                                  {
                                    to: "/punctualsponsor/".concat(
                                      this.state.animal._id
                                    ),
                                    style: { color: "white" },
                                  },
                                  "Punctual",
                                  l.a.createElement("br", null),
                                  " Sponsorship"
                                )
                              )
                            ),
                            l.a.createElement(
                              ye.a.Column,
                              { width: 4 },
                              l.a.createElement(
                                "div",
                                { className: "sponsor" },
                                this.state.animal.adopted &&
                                  l.a.createElement(
                                    "div",
                                    { class: "overlay" },
                                    l.a.createElement(
                                      "div",
                                      { class: "text-overlay" },
                                      l.a.createElement(
                                        r.b,
                                        { to: "/", className: "meetLink" },
                                        "Already adopted!"
                                      )
                                    )
                                  ),
                                l.a.createElement(
                                  r.b,
                                  {
                                    to: "/monthlysponsor/".concat(
                                      this.state.animal._id
                                    ),
                                    style: { color: "white" },
                                  },
                                  "Monthly",
                                  l.a.createElement("br", null),
                                  " Sponsorship"
                                )
                              )
                            ),
                            l.a.createElement(
                              ye.a.Column,
                              { width: 4 },
                              l.a.createElement(
                                "div",
                                { className: "sponsor" },
                                this.state.animal.adopted &&
                                  l.a.createElement(
                                    "div",
                                    { class: "overlay" },
                                    l.a.createElement(
                                      "div",
                                      { class: "text-overlay" },
                                      l.a.createElement(
                                        r.b,
                                        { to: "/", className: "meetLink" },
                                        "Already adopted!"
                                      )
                                    )
                                  ),
                                l.a.createElement(
                                  r.b,
                                  {
                                    to: "/adoption/".concat(
                                      this.state.animal._id
                                    ),
                                    style: { color: "white" },
                                  },
                                  "1 year",
                                  l.a.createElement("br", null),
                                  "Adoption"
                                )
                              )
                            )
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              n
            );
          })(l.a.Component));
      fe.contextType = O;
      var ve = I(fe),
        Ee = function (e) {
          return l.a.createElement(
            "div",
            { className: "animalTarget" },
            l.a.createElement(T, null),
            l.a.createElement(ve, { id: e.match.params.id })
          );
        },
        _e = n(225),
        we = {
          formValues: {
            date: "",
            service: "",
            facebook: "",
            twitter: "",
            firstname: "",
            lastname: "",
            email: "",
            line1: "",
            line2: "",
            postal_code: "",
            city: "",
            country: null,
            currency: null,
            amount: "",
          },
        },
        Ce = function (e, a) {
          switch (a.type) {
            case "editFormValue":
              return (
                (e.formValues[a.key.toLowerCase()] = a.value),
                Object(_e.a)({}, e)
              );
            case "emptyFormValue":
              return Object(_e.a)(
                Object(_e.a)({}, e),
                {},
                { formValues: we.formValues }
              );
          }
          return e;
        },
        Se = Object(t.createContext)(),
        ke = function (e) {
          var a = e.children;
          return l.a.createElement(
            Se.Provider,
            { value: Object(t.useReducer)(Ce, we) },
            a
          );
        },
        Ne = function () {
          return Object(t.useContext)(Se);
        },
        Ae = n(552),
        Oe = n(311),
        Re = n(572),
        xe = {
          typography: {
            fontFamily: [
              "-apple-system",
              "BlinkMacSystemFont",
              "Segoe UI",
              "Roboto",
              "Helvetica Neue",
              "Arial",
              "sans-serif",
              "Apple Color Emoji",
              "Segoe UI Emoji",
              "Segoe UI Symbol",
            ],
          },
          palette: {
            common: { black: "#000", white: "#fff" },
            background: { paper: "#fff", default: "#fafafa" },
            primary: {
              light: "#7dafc2",
              main: "#5d9cb3",
              dark: "#416d7d",
              contrastText: "#fff",
            },
            secondary: {
              light: "#ff4081",
              main: "#f50057",
              dark: "#c51162",
              contrastText: "#fff",
            },
            error: {
              light: "#e57373",
              main: "#f44336",
              dark: "#d32f2f",
              contrastText: "#fff",
            },
            text: {
              primary: "rgba(0, 0, 0, 0.87)",
              secondary: "rgba(0, 0, 0, 0.54)",
              disabled: "rgba(0, 0, 0, 0.38)",
              hint: "rgba(0, 0, 0, 0.38)",
            },
          },
        };
      xe = Object(Oe.a)(xe);
      var Ie = (xe = Object(Re.a)(xe)),
        Pe = n(529),
        je = n(531),
        Te = n(532),
        Me = n(245),
        De = n(527),
        Le = Object(De.a)(function (e) {
          return {
            topAppBar: { Height: "20vh", minHeight: "200px" },
            toolbar: {
              alignItems: "flex-start",
              justifyContent: "center",
              paddingTop: e.spacing(2),
              paddingBottom: e.spacing(2),
            },
            title: {
              flexGrow: 1,
              alignSelf: "flex-end",
              verticalAlign: "middle",
              display: "inline-flex",
            },
          };
        }),
        Fe = function (e) {
          var a = e.title,
            n = (e.logoLink, Le());
          return l.a.createElement(
            Pe.a,
            {
              position: "static",
              elevation: 0,
              color: "default",
              className: n.topAppBar,
            },
            l.a.createElement(
              je.a,
              { className: n.toolbar },
              void 0 !== a &&
                l.a.createElement(
                  Te.a,
                  {
                    container: !0,
                    item: !0,
                    direction: "row",
                    alignItems: "center",
                    xs: 12,
                    sm: 6,
                  },
                  l.a.createElement(
                    Te.a,
                    { item: !0 },
                    l.a.createElement("img", {
                      src:
                        "https://res.cloudinary.com/dxgllmny2/image/upload/v1603271133/LionIcon_dqetpr.png",
                      alt: "logo",
                      height: "70px",
                      style: { width: "10vw", paddingRight:"5%" }
                    })
                  ),
                  l.a.createElement(
                    Te.a,
                    { item: !0 },
                    l.a.createElement(
                      Me.a,
                      {
                        className: n.title,
                        variant: "h4",
                        noWrap: !0,
                        color: "primary",
                      },
                      a.toUpperCase()
                    )
                  )
                )
            )
          );
        },
        Be = n(73),
        Ge = n.n(Be),
        Ke = n(126),
        Ue = n(39),
        He = n(557),
        Ve = n(543),
        We = n(318),
        ze = n(537),
        Ye = n(538),
        $e = n(566),
        qe = n(541),
        Ze = n(542),
        Je = n(539),
        Qe = n(540),
        Xe = n(2),
        ea = n(533),
        aa = n(534),
        na = n(535),
        ta = Object(De.a)(function (e) {
          return {
            root: {
              backgroundColor: "#ccc",
              zIndex: 1,
              color: "#fff",
              width: 50,
              height: 50,
              display: "flex",
              borderRadius: "50%",
              justifyContent: "center",
              alignItems: "center",
            },
            active: {
              background: e.palette.primary.main,
              boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
            },
            completed: { background: e.palette.primary.main },
          };
        }),
        la = function (e) {
          var a,
            n = ta(),
            t = e.active,
            o = e.completed,
            i = {
              1: l.a.createElement(ea.a, null),
              2: l.a.createElement(aa.a, null),
              3: l.a.createElement(na.a, null),
              4: l.a.createElement(na.a, null),
            };
          return l.a.createElement(
            "div",
            {
              className: Object(Xe.a)(
                n.root,
                ((a = {}),
                Object(K.a)(a, n.active, t),
                Object(K.a)(a, n.completed, o),
                a)
              ),
            },
            i[String(e.icon)]
          );
        },
        oa = n(555),
        ia = n(558),
        ra = function () {
          var e = Ne(),
            a = Object(Ue.a)(e, 2),
            n = a[0].formValues,
            t = a[1];
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              Te.a,
              { item: !0, xs: 12 },
              l.a.createElement(Me.a, { variant: "h6" }, "Contact information")
            ),
            l.a.createElement(
              Te.a,
              { item: !0, xs: 12, sm: 4 },
              l.a.createElement(oa.a, {
                label: "First Name",
                name: "firstname",
                variant: "outlined",
                required: !0,
                fullWidth: !0,
                value: n.firstname,
                onChange: function (e) {
                  return t({
                    type: "editFormValue",
                    key: "firstname",
                    value: e.target.value,
                  });
                },
              })
            ),
            l.a.createElement(
              Te.a,
              { item: !0, xs: 12, sm: 4 },
              l.a.createElement(oa.a, {
                label: "Last Name",
                name: "lastname",
                variant: "outlined",
                required: !0,
                fullWidth: !0,
                value: n.lastname,
                onChange: function (e) {
                  return t({
                    type: "editFormValue",
                    key: "lastname",
                    value: e.target.value,
                  });
                },
              })
            ),
            l.a.createElement(
              Te.a,
              { item: !0, xs: 12, sm: 4 },
              l.a.createElement(oa.a, {
                label: "Email Address",
                name: "email",
                variant: "outlined",
                required: !0,
                fullWidth: !0,
                value: n.email,
                onChange: function (e) {
                  return t({
                    type: "editFormValue",
                    key: "email",
                    value: e.target.value,
                  });
                },
              })
            ),
            l.a.createElement(
              Te.a,
              { item: !0, xs: 12, sm: 6 },
              l.a.createElement(oa.a, {
                label: "Street Address 1",
                name: "address1",
                variant: "outlined",
                required: !0,
                fullWidth: !0,
                value: n.line1,
                onChange: function (e) {
                  return t({
                    type: "editFormValue",
                    key: "line1",
                    value: e.target.value,
                  });
                },
              })
            ),
            l.a.createElement(
              Te.a,
              { item: !0, xs: 12, sm: 6 },
              l.a.createElement(oa.a, {
                label: "Street Address 2 (optional)",
                name: "line2",
                variant: "outlined",
                fullWidth: !0,
                value: n.line2,
                onChange: function (e) {
                  return t({
                    type: "editFormValue",
                    key: "line2",
                    value: e.target.value,
                  });
                },
              })
            ),
            l.a.createElement(
              Te.a,
              { item: !0, xs: 12, sm: 4 },
              l.a.createElement(oa.a, {
                label: "Postal Code",
                name: "postal_code",
                variant: "outlined",
                required: !0,
                fullWidth: !0,
                value: n.postal_code,
                onChange: function (e) {
                  return t({
                    type: "editFormValue",
                    key: "postal_code",
                    value: e.target.value,
                  });
                },
              })
            ),
            l.a.createElement(
              Te.a,
              { item: !0, xs: 12, sm: 4 },
              l.a.createElement(oa.a, {
                label: "City",
                name: "city",
                variant: "outlined",
                required: !0,
                fullWidth: !0,
                value: n.city,
                onChange: function (e) {
                  return t({
                    type: "editFormValue",
                    key: "city",
                    value: e.target.value,
                  });
                },
              })
            ),
            l.a.createElement(
              Te.a,
              { item: !0, xs: 12, sm: 4 },
              l.a.createElement(ia.a, {
                options: ca,
                getOptionLabel: function (e) {
                  return e.name;
                },
                renderInput: function (e) {
                  return l.a.createElement(
                    oa.a,
                    Object.assign(
                      {
                        label: "Country",
                        name: "country",
                        variant: "outlined",
                        required: !0,
                        fullWidth: !0,
                      },
                      e
                    )
                  );
                },
                value: n.country,
                onChange: function (e, a) {
                  t({ type: "editFormValue", key: "country", value: a });
                },
              })
            )
          );
        },
        ca = [
          { name: "Afghanistan", code: "AF" },
          { name: "\xc5land Islands", code: "AX" },
          { name: "Albania", code: "AL" },
          { name: "Algeria", code: "DZ" },
          { name: "American Samoa", code: "AS" },
          { name: "AndorrA", code: "AD" },
          { name: "Angola", code: "AO" },
          { name: "Anguilla", code: "AI" },
          { name: "Antarctica", code: "AQ" },
          { name: "Antigua and Barbuda", code: "AG" },
          { name: "Argentina", code: "AR" },
          { name: "Armenia", code: "AM" },
          { name: "Aruba", code: "AW" },
          { name: "Australia", code: "AU" },
          { name: "Austria", code: "AT" },
          { name: "Azerbaijan", code: "AZ" },
          { name: "Bahamas", code: "BS" },
          { name: "Bahrain", code: "BH" },
          { name: "Bangladesh", code: "BD" },
          { name: "Barbados", code: "BB" },
          { name: "Belarus", code: "BY" },
          { name: "Belgium", code: "BE" },
          { name: "Belize", code: "BZ" },
          { name: "Benin", code: "BJ" },
          { name: "Bermuda", code: "BM" },
          { name: "Bhutan", code: "BT" },
          { name: "Bolivia", code: "BO" },
          { name: "Bosnia and Herzegovina", code: "BA" },
          { name: "Botswana", code: "BW" },
          { name: "Bouvet Island", code: "BV" },
          { name: "Brazil", code: "BR" },
          { name: "British Indian Ocean Territory", code: "IO" },
          { name: "Brunei Darussalam", code: "BN" },
          { name: "Bulgaria", code: "BG" },
          { name: "Burkina Faso", code: "BF" },
          { name: "Burundi", code: "BI" },
          { name: "Cambodia", code: "KH" },
          { name: "Cameroon", code: "CM" },
          { name: "Canada", code: "CA" },
          { name: "Cape Verde", code: "CV" },
          { name: "Cayman Islands", code: "KY" },
          { name: "Central African Republic", code: "CF" },
          { name: "Chad", code: "TD" },
          { name: "Chile", code: "CL" },
          { name: "China", code: "CN" },
          { name: "Christmas Island", code: "CX" },
          { name: "Cocos (Keeling) Islands", code: "CC" },
          { name: "Colombia", code: "CO" },
          { name: "Comoros", code: "KM" },
          { name: "Congo", code: "CG" },
          { name: "Congo, The Democratic Republic of the", code: "CD" },
          { name: "Cook Islands", code: "CK" },
          { name: "Costa Rica", code: "CR" },
          { name: "Cote D'Ivoire", code: "CI" },
          { name: "Croatia", code: "HR" },
          { name: "Cuba", code: "CU" },
          { name: "Cyprus", code: "CY" },
          { name: "Czech Republic", code: "CZ" },
          { name: "Denmark", code: "DK" },
          { name: "Djibouti", code: "DJ" },
          { name: "Dominica", code: "DM" },
          { name: "Dominican Republic", code: "DO" },
          { name: "Ecuador", code: "EC" },
          { name: "Egypt", code: "EG" },
          { name: "El Salvador", code: "SV" },
          { name: "Equatorial Guinea", code: "GQ" },
          { name: "Eritrea", code: "ER" },
          { name: "Estonia", code: "EE" },
          { name: "Ethiopia", code: "ET" },
          { name: "Falkland Islands (Malvinas)", code: "FK" },
          { name: "Faroe Islands", code: "FO" },
          { name: "Fiji", code: "FJ" },
          { name: "Finland", code: "FI" },
          { name: "France", code: "FR" },
          { name: "French Guiana", code: "GF" },
          { name: "French Polynesia", code: "PF" },
          { name: "French Southern Territories", code: "TF" },
          { name: "Gabon", code: "GA" },
          { name: "Gambia", code: "GM" },
          { name: "Georgia", code: "GE" },
          { name: "Germany", code: "DE" },
          { name: "Ghana", code: "GH" },
          { name: "Gibraltar", code: "GI" },
          { name: "Greece", code: "GR" },
          { name: "Greenland", code: "GL" },
          { name: "Grenada", code: "GD" },
          { name: "Guadeloupe", code: "GP" },
          { name: "Guam", code: "GU" },
          { name: "Guatemala", code: "GT" },
          { name: "Guernsey", code: "GG" },
          { name: "Guinea", code: "GN" },
          { name: "Guinea-Bissau", code: "GW" },
          { name: "Guyana", code: "GY" },
          { name: "Haiti", code: "HT" },
          { name: "Heard Island and Mcdonald Islands", code: "HM" },
          { name: "Holy See (Vatican City State)", code: "VA" },
          { name: "Honduras", code: "HN" },
          { name: "Hong Kong", code: "HK" },
          { name: "Hungary", code: "HU" },
          { name: "Iceland", code: "IS" },
          { name: "India", code: "IN" },
          { name: "Indonesia", code: "ID" },
          { name: "Iran, Islamic Republic Of", code: "IR" },
          { name: "Iraq", code: "IQ" },
          { name: "Ireland", code: "IE" },
          { name: "Isle of Man", code: "IM" },
          { name: "Israel", code: "IL" },
          { name: "Italy", code: "IT" },
          { name: "Jamaica", code: "JM" },
          { name: "Japan", code: "JP" },
          { name: "Jersey", code: "JE" },
          { name: "Jordan", code: "JO" },
          { name: "Kazakhstan", code: "KZ" },
          { name: "Kenya", code: "KE" },
          { name: "Kiribati", code: "KI" },
          { name: "Korea, Democratic People'S Republic of", code: "KP" },
          { name: "Korea, Republic of", code: "KR" },
          { name: "Kuwait", code: "KW" },
          { name: "Kyrgyzstan", code: "KG" },
          { name: "Lao People'S Democratic Republic", code: "LA" },
          { name: "Latvia", code: "LV" },
          { name: "Lebanon", code: "LB" },
          { name: "Lesotho", code: "LS" },
          { name: "Liberia", code: "LR" },
          { name: "Libyan Arab Jamahiriya", code: "LY" },
          { name: "Liechtenstein", code: "LI" },
          { name: "Lithuania", code: "LT" },
          { name: "Luxembourg", code: "LU" },
          { name: "Macao", code: "MO" },
          { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
          { name: "Madagascar", code: "MG" },
          { name: "Malawi", code: "MW" },
          { name: "Malaysia", code: "MY" },
          { name: "Maldives", code: "MV" },
          { name: "Mali", code: "ML" },
          { name: "Malta", code: "MT" },
          { name: "Marshall Islands", code: "MH" },
          { name: "Martinique", code: "MQ" },
          { name: "Mauritania", code: "MR" },
          { name: "Mauritius", code: "MU" },
          { name: "Mayotte", code: "YT" },
          { name: "Mexico", code: "MX" },
          { name: "Micronesia, Federated States of", code: "FM" },
          { name: "Moldova, Republic of", code: "MD" },
          { name: "Monaco", code: "MC" },
          { name: "Mongolia", code: "MN" },
          { name: "Montserrat", code: "MS" },
          { name: "Morocco", code: "MA" },
          { name: "Mozambique", code: "MZ" },
          { name: "Myanmar", code: "MM" },
          { name: "Namibia", code: "NA" },
          { name: "Nauru", code: "NR" },
          { name: "Nepal", code: "NP" },
          { name: "Netherlands", code: "NL" },
          { name: "Netherlands Antilles", code: "AN" },
          { name: "New Caledonia", code: "NC" },
          { name: "New Zealand", code: "NZ" },
          { name: "Nicaragua", code: "NI" },
          { name: "Niger", code: "NE" },
          { name: "Nigeria", code: "NG" },
          { name: "Niue", code: "NU" },
          { name: "Norfolk Island", code: "NF" },
          { name: "Northern Mariana Islands", code: "MP" },
          { name: "Norway", code: "NO" },
          { name: "Oman", code: "OM" },
          { name: "Pakistan", code: "PK" },
          { name: "Palau", code: "PW" },
          { name: "Palestinian Territory, Occupied", code: "PS" },
          { name: "Panama", code: "PA" },
          { name: "Papua New Guinea", code: "PG" },
          { name: "Paraguay", code: "PY" },
          { name: "Peru", code: "PE" },
          { name: "Philippines", code: "PH" },
          { name: "Pitcairn", code: "PN" },
          { name: "Poland", code: "PL" },
          { name: "Portugal", code: "PT" },
          { name: "Puerto Rico", code: "PR" },
          { name: "Qatar", code: "QA" },
          { name: "Reunion", code: "RE" },
          { name: "Romania", code: "RO" },
          { name: "Russian Federation", code: "RU" },
          { name: "RWANDA", code: "RW" },
          { name: "Saint Helena", code: "SH" },
          { name: "Saint Kitts and Nevis", code: "KN" },
          { name: "Saint Lucia", code: "LC" },
          { name: "Saint Pierre and Miquelon", code: "PM" },
          { name: "Saint Vincent and the Grenadines", code: "VC" },
          { name: "Samoa", code: "WS" },
          { name: "San Marino", code: "SM" },
          { name: "Sao Tome and Principe", code: "ST" },
          { name: "Saudi Arabia", code: "SA" },
          { name: "Senegal", code: "SN" },
          { name: "Serbia and Montenegro", code: "CS" },
          { name: "Seychelles", code: "SC" },
          { name: "Sierra Leone", code: "SL" },
          { name: "Singapore", code: "SG" },
          { name: "Slovakia", code: "SK" },
          { name: "Slovenia", code: "SI" },
          { name: "Solomon Islands", code: "SB" },
          { name: "Somalia", code: "SO" },
          { name: "South Africa", code: "ZA" },
          { name: "South Georgia and the South Sandwich Islands", code: "GS" },
          { name: "Spain", code: "ES" },
          { name: "Sri Lanka", code: "LK" },
          { name: "Sudan", code: "SD" },
          { name: "Suriname", code: "SR" },
          { name: "Svalbard and Jan Mayen", code: "SJ" },
          { name: "Swaziland", code: "SZ" },
          { name: "Sweden", code: "SE" },
          { name: "Switzerland", code: "CH" },
          { name: "Syrian Arab Republic", code: "SY" },
          { name: "Taiwan, Province of China", code: "TW" },
          { name: "Tajikistan", code: "TJ" },
          { name: "Tanzania, United Republic of", code: "TZ" },
          { name: "Thailand", code: "TH" },
          { name: "Timor-Leste", code: "TL" },
          { name: "Togo", code: "TG" },
          { name: "Tokelau", code: "TK" },
          { name: "Tonga", code: "TO" },
          { name: "Trinidad and Tobago", code: "TT" },
          { name: "Tunisia", code: "TN" },
          { name: "Turkey", code: "TR" },
          { name: "Turkmenistan", code: "TM" },
          { name: "Turks and Caicos Islands", code: "TC" },
          { name: "Tuvalu", code: "TV" },
          { name: "Uganda", code: "UG" },
          { name: "Ukraine", code: "UA" },
          { name: "United Arab Emirates", code: "AE" },
          { name: "United Kingdom", code: "GB" },
          { name: "United States", code: "US" },
          { name: "United States Minor Outlying Islands", code: "UM" },
          { name: "Uruguay", code: "UY" },
          { name: "Uzbekistan", code: "UZ" },
          { name: "Vanuatu", code: "VU" },
          { name: "Venezuela", code: "VE" },
          { name: "Viet Nam", code: "VN" },
          { name: "Virgin Islands, British", code: "VG" },
          { name: "Virgin Islands, U.S.", code: "VI" },
          { name: "Wallis and Futuna", code: "WF" },
          { name: "Western Sahara", code: "EH" },
          { name: "Yemen", code: "YE" },
          { name: "Zambia", code: "ZM" },
          { name: "Zimbabwe", code: "ZW" },
        ],
        sa = n(87),
        ma = function (e) {
          var a = e.component,
            n = e.inputRef,
            o = Object(Q.a)(e, ["component", "inputRef"]),
            i = Object(t.useRef)();
          return (
            Object(t.useImperativeHandle)(n, function () {
              return {
                focus: function () {
                  return i.current.focus;
                },
              };
            }),
            l.a.createElement(
              a,
              Object.assign(
                {
                  onReady: function (e) {
                    return (i.current = e);
                  },
                },
                o
              )
            )
          );
        },
        ua = function () {
          var e = Ne(),
            a = Object(Ue.a)(e, 2),
            n = a[0].formValues,
            t = a[1];
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              Te.a,
              { container: !0, item: !0, xs: 12 },
              l.a.createElement(
                Te.a,
                { item: !0, xs: 12, sm: 3 },
                l.a.createElement(Me.a, { variant: "h6" }, "Payment Data")
              ),
              l.a.createElement(
                Te.a,
                {
                  container: !0,
                  item: !0,
                  xs: 12,
                  sm: 9,
                  justify: "space-between",
                },
                [
                  "amex",
                  "cirrus",
                  "diners",
                  "dankort",
                  "discover",
                  "jcb",
                  "maestro",
                  "mastercard",
                  "visa",
                  "visaelectron",
                ].map(function (e) {
                  return l.a.createElement("img", {
                    key: e,
                    src: "./cards/".concat(e, ".png"),
                    alt: e,
                    width: "50px",
                    align: "bottom",
                    style: { padding: "0 5px" },
                  });
                })
              )
            ),
            l.a.createElement(
              Te.a,
              { item: !0, xs: 6, sm: 3 },
              l.a.createElement(ia.a, {
                options: da,
                getOptionLabel: function (e) {
                  return e.code;
                },
                renderOption: function (e) {
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    e.name,
                    " (",
                    e.code,
                    ")"
                  );
                },
                renderInput: function (e) {
                  return l.a.createElement(
                    oa.a,
                    Object.assign(
                      {
                        label: "Currency",
                        name: "currency",
                        variant: "outlined",
                        fullWidth: !0,
                      },
                      e
                    )
                  );
                },
                value: n.currency,
                onChange: function (e, a) {
                  t({ type: "editFormValue", key: "currency", value: a });
                },
              })
            ),
            l.a.createElement(
              Te.a,
              { item: !0, xs: 6, sm: 3 },
              l.a.createElement(oa.a, {
                label: "Amount",
                name: "amount",
                variant: "outlined",
                required: !0,
                fullWidth: !0,
                value: n.amount,
                onChange: function (e) {
                  return t({
                    type: "editFormValue",
                    key: "amount",
                    value: e.target.value.replace(/[^0-9,.]/g, ""),
                  });
                },
              })
            ),
            l.a.createElement(
              Te.a,
              { item: !0, xs: 12, sm: 6 },
              l.a.createElement(oa.a, {
                label: "Credit Card Number",
                name: "ccnumber",
                variant: "outlined",
                required: !0,
                fullWidth: !0,
                InputProps: {
                  inputComponent: ma,
                  inputProps: { component: sa.CardNumberElement },
                },
                InputLabelProps: { shrink: !0 },
              })
            ),
            l.a.createElement(
              Te.a,
              { item: !0, xs: 6, sm: 6 },
              l.a.createElement(oa.a, {
                label: "Expiration Date",
                name: "ccexp",
                variant: "outlined",
                required: !0,
                fullWidth: !0,
                InputProps: {
                  inputProps: { component: sa.CardExpiryElement },
                  inputComponent: ma,
                },
                InputLabelProps: { shrink: !0 },
              })
            ),
            l.a.createElement(
              Te.a,
              { item: !0, xs: 6, sm: 6 },
              l.a.createElement(oa.a, {
                label: "CVC",
                name: "cvc",
                variant: "outlined",
                required: !0,
                fullWidth: !0,
                InputProps: {
                  inputProps: { component: sa.CardCvcElement },
                  inputComponent: ma,
                },
                InputLabelProps: { shrink: !0 },
              })
            )
          );
        },
        da = [
          {
            symbol: "AED",
            name: "United Arab Emirates Dirham",
            symbol_native: "\u062f.\u0625.\u200f",
            decimal_digits: 2,
            rounding: 0,
            code: "AED",
            name_plural: "UAE dirhams",
          },
          {
            symbol: "Af",
            name: "Afghan Afghani",
            symbol_native: "\u060b",
            decimal_digits: 0,
            rounding: 0,
            code: "AFN",
            name_plural: "Afghan Afghanis",
          },
          {
            symbol: "ALL",
            name: "Albanian Lek",
            symbol_native: "Lek",
            decimal_digits: 0,
            rounding: 0,
            code: "ALL",
            name_plural: "Albanian lek\xeb",
          },
          {
            symbol: "AMD",
            name: "Armenian Dram",
            symbol_native: "\u0564\u0580.",
            decimal_digits: 0,
            rounding: 0,
            code: "AMD",
            name_plural: "Armenian drams",
          },
          {
            symbol: "AR$",
            name: "Argentine Peso",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "ARS",
            name_plural: "Argentine pesos",
          },
          {
            symbol: "AU$",
            name: "Australian Dollar",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "AUD",
            name_plural: "Australian dollars",
          },
          {
            symbol: "man.",
            name: "Azerbaijani Manat",
            symbol_native: "\u043c\u0430\u043d.",
            decimal_digits: 2,
            rounding: 0,
            code: "AZN",
            name_plural: "Azerbaijani manats",
          },
          {
            symbol: "KM",
            name: "Bosnia-Herzegovina Convertible Mark",
            symbol_native: "KM",
            decimal_digits: 2,
            rounding: 0,
            code: "BAM",
            name_plural: "Bosnia-Herzegovina convertible marks",
          },
          {
            symbol: "Tk",
            name: "Bangladeshi Taka",
            symbol_native: "\u09f3",
            decimal_digits: 2,
            rounding: 0,
            code: "BDT",
            name_plural: "Bangladeshi takas",
          },
          {
            symbol: "BGN",
            name: "Bulgarian Lev",
            symbol_native: "\u043b\u0432.",
            decimal_digits: 2,
            rounding: 0,
            code: "BGN",
            name_plural: "Bulgarian leva",
          },
          {
            symbol: "BD",
            name: "Bahraini Dinar",
            symbol_native: "\u062f.\u0628.\u200f",
            decimal_digits: 3,
            rounding: 0,
            code: "BHD",
            name_plural: "Bahraini dinars",
          },
          {
            symbol: "FBu",
            name: "Burundian Franc",
            symbol_native: "FBu",
            decimal_digits: 0,
            rounding: 0,
            code: "BIF",
            name_plural: "Burundian francs",
          },
          {
            symbol: "BN$",
            name: "Brunei Dollar",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "BND",
            name_plural: "Brunei dollars",
          },
          {
            symbol: "Bs",
            name: "Bolivian Boliviano",
            symbol_native: "Bs",
            decimal_digits: 2,
            rounding: 0,
            code: "BOB",
            name_plural: "Bolivian bolivianos",
          },
          {
            symbol: "R$",
            name: "Brazilian Real",
            symbol_native: "R$",
            decimal_digits: 2,
            rounding: 0,
            code: "BRL",
            name_plural: "Brazilian reals",
          },
          {
            symbol: "BWP",
            name: "Botswanan Pula",
            symbol_native: "P",
            decimal_digits: 2,
            rounding: 0,
            code: "BWP",
            name_plural: "Botswanan pulas",
          },
          {
            symbol: "BYR",
            name: "Belarusian Ruble",
            symbol_native: "BYR",
            decimal_digits: 0,
            rounding: 0,
            code: "BYR",
            name_plural: "Belarusian rubles",
          },
          {
            symbol: "BZ$",
            name: "Belize Dollar",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "BZD",
            name_plural: "Belize dollars",
          },
          {
            symbol: "CA$",
            name: "Canadian Dollar",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "CAD",
            name_plural: "Canadian dollars",
          },
          {
            symbol: "CDF",
            name: "Congolese Franc",
            symbol_native: "FrCD",
            decimal_digits: 2,
            rounding: 0,
            code: "CDF",
            name_plural: "Congolese francs",
          },
          {
            symbol: "CHF",
            name: "Swiss Franc",
            symbol_native: "CHF",
            decimal_digits: 2,
            rounding: 0.05,
            code: "CHF",
            name_plural: "Swiss francs",
          },
          {
            symbol: "CL$",
            name: "Chilean Peso",
            symbol_native: "$",
            decimal_digits: 0,
            rounding: 0,
            code: "CLP",
            name_plural: "Chilean pesos",
          },
          {
            symbol: "CN\xa5",
            name: "Chinese Yuan",
            symbol_native: "CN\xa5",
            decimal_digits: 2,
            rounding: 0,
            code: "CNY",
            name_plural: "Chinese yuan",
          },
          {
            symbol: "CO$",
            name: "Colombian Peso",
            symbol_native: "$",
            decimal_digits: 0,
            rounding: 0,
            code: "COP",
            name_plural: "Colombian pesos",
          },
          {
            symbol: "\u20a1",
            name: "Costa Rican Col\xf3n",
            symbol_native: "\u20a1",
            decimal_digits: 0,
            rounding: 0,
            code: "CRC",
            name_plural: "Costa Rican col\xf3ns",
          },
          {
            symbol: "CV$",
            name: "Cape Verdean Escudo",
            symbol_native: "CV$",
            decimal_digits: 2,
            rounding: 0,
            code: "CVE",
            name_plural: "Cape Verdean escudos",
          },
          {
            symbol: "K\u010d",
            name: "Czech Republic Koruna",
            symbol_native: "K\u010d",
            decimal_digits: 2,
            rounding: 0,
            code: "CZK",
            name_plural: "Czech Republic korunas",
          },
          {
            symbol: "Fdj",
            name: "Djiboutian Franc",
            symbol_native: "Fdj",
            decimal_digits: 0,
            rounding: 0,
            code: "DJF",
            name_plural: "Djiboutian francs",
          },
          {
            symbol: "Dkr",
            name: "Danish Krone",
            symbol_native: "kr",
            decimal_digits: 2,
            rounding: 0,
            code: "DKK",
            name_plural: "Danish kroner",
          },
          {
            symbol: "RD$",
            name: "Dominican Peso",
            symbol_native: "RD$",
            decimal_digits: 2,
            rounding: 0,
            code: "DOP",
            name_plural: "Dominican pesos",
          },
          {
            symbol: "DA",
            name: "Algerian Dinar",
            symbol_native: "\u062f.\u062c.\u200f",
            decimal_digits: 2,
            rounding: 0,
            code: "DZD",
            name_plural: "Algerian dinars",
          },
          {
            symbol: "Ekr",
            name: "Estonian Kroon",
            symbol_native: "kr",
            decimal_digits: 2,
            rounding: 0,
            code: "EEK",
            name_plural: "Estonian kroons",
          },
          {
            symbol: "EGP",
            name: "Egyptian Pound",
            symbol_native: "\u062c.\u0645.\u200f",
            decimal_digits: 2,
            rounding: 0,
            code: "EGP",
            name_plural: "Egyptian pounds",
          },
          {
            symbol: "Nfk",
            name: "Eritrean Nakfa",
            symbol_native: "Nfk",
            decimal_digits: 2,
            rounding: 0,
            code: "ERN",
            name_plural: "Eritrean nakfas",
          },
          {
            symbol: "Br",
            name: "Ethiopian Birr",
            symbol_native: "Br",
            decimal_digits: 2,
            rounding: 0,
            code: "ETB",
            name_plural: "Ethiopian birrs",
          },
          {
            symbol: "\u20ac",
            name: "Euro",
            symbol_native: "\u20ac",
            decimal_digits: 2,
            rounding: 0,
            code: "EUR",
            name_plural: "euros",
          },
          {
            symbol: "\xa3",
            name: "British Pound Sterling",
            symbol_native: "\xa3",
            decimal_digits: 2,
            rounding: 0,
            code: "GBP",
            name_plural: "British pounds sterling",
          },
          {
            symbol: "GEL",
            name: "Georgian Lari",
            symbol_native: "GEL",
            decimal_digits: 2,
            rounding: 0,
            code: "GEL",
            name_plural: "Georgian laris",
          },
          {
            symbol: "GH\u20b5",
            name: "Ghanaian Cedi",
            symbol_native: "GH\u20b5",
            decimal_digits: 2,
            rounding: 0,
            code: "GHS",
            name_plural: "Ghanaian cedis",
          },
          {
            symbol: "FG",
            name: "Guinean Franc",
            symbol_native: "FG",
            decimal_digits: 0,
            rounding: 0,
            code: "GNF",
            name_plural: "Guinean francs",
          },
          {
            symbol: "GTQ",
            name: "Guatemalan Quetzal",
            symbol_native: "Q",
            decimal_digits: 2,
            rounding: 0,
            code: "GTQ",
            name_plural: "Guatemalan quetzals",
          },
          {
            symbol: "HK$",
            name: "Hong Kong Dollar",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "HKD",
            name_plural: "Hong Kong dollars",
          },
          {
            symbol: "HNL",
            name: "Honduran Lempira",
            symbol_native: "L",
            decimal_digits: 2,
            rounding: 0,
            code: "HNL",
            name_plural: "Honduran lempiras",
          },
          {
            symbol: "kn",
            name: "Croatian Kuna",
            symbol_native: "kn",
            decimal_digits: 2,
            rounding: 0,
            code: "HRK",
            name_plural: "Croatian kunas",
          },
          {
            symbol: "Ft",
            name: "Hungarian Forint",
            symbol_native: "Ft",
            decimal_digits: 0,
            rounding: 0,
            code: "HUF",
            name_plural: "Hungarian forints",
          },
          {
            symbol: "Rp",
            name: "Indonesian Rupiah",
            symbol_native: "Rp",
            decimal_digits: 0,
            rounding: 0,
            code: "IDR",
            name_plural: "Indonesian rupiahs",
          },
          {
            symbol: "\u20aa",
            name: "Israeli New Sheqel",
            symbol_native: "\u20aa",
            decimal_digits: 2,
            rounding: 0,
            code: "ILS",
            name_plural: "Israeli new sheqels",
          },
          {
            symbol: "Rs",
            name: "Indian Rupee",
            symbol_native: "\u099f\u0995\u09be",
            decimal_digits: 2,
            rounding: 0,
            code: "INR",
            name_plural: "Indian rupees",
          },
          {
            symbol: "IQD",
            name: "Iraqi Dinar",
            symbol_native: "\u062f.\u0639.\u200f",
            decimal_digits: 0,
            rounding: 0,
            code: "IQD",
            name_plural: "Iraqi dinars",
          },
          {
            symbol: "IRR",
            name: "Iranian Rial",
            symbol_native: "\ufdfc",
            decimal_digits: 0,
            rounding: 0,
            code: "IRR",
            name_plural: "Iranian rials",
          },
          {
            symbol: "Ikr",
            name: "Icelandic Kr\xf3na",
            symbol_native: "kr",
            decimal_digits: 0,
            rounding: 0,
            code: "ISK",
            name_plural: "Icelandic kr\xf3nur",
          },
          {
            symbol: "J$",
            name: "Jamaican Dollar",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "JMD",
            name_plural: "Jamaican dollars",
          },
          {
            symbol: "JD",
            name: "Jordanian Dinar",
            symbol_native: "\u062f.\u0623.\u200f",
            decimal_digits: 3,
            rounding: 0,
            code: "JOD",
            name_plural: "Jordanian dinars",
          },
          {
            symbol: "\xa5",
            name: "Japanese Yen",
            symbol_native: "\uffe5",
            decimal_digits: 0,
            rounding: 0,
            code: "JPY",
            name_plural: "Japanese yen",
          },
          {
            symbol: "Ksh",
            name: "Kenyan Shilling",
            symbol_native: "Ksh",
            decimal_digits: 2,
            rounding: 0,
            code: "KES",
            name_plural: "Kenyan shillings",
          },
          {
            symbol: "KHR",
            name: "Cambodian Riel",
            symbol_native: "\u17db",
            decimal_digits: 2,
            rounding: 0,
            code: "KHR",
            name_plural: "Cambodian riels",
          },
          {
            symbol: "CF",
            name: "Comorian Franc",
            symbol_native: "FC",
            decimal_digits: 0,
            rounding: 0,
            code: "KMF",
            name_plural: "Comorian francs",
          },
          {
            symbol: "\u20a9",
            name: "South Korean Won",
            symbol_native: "\u20a9",
            decimal_digits: 0,
            rounding: 0,
            code: "KRW",
            name_plural: "South Korean won",
          },
          {
            symbol: "KD",
            name: "Kuwaiti Dinar",
            symbol_native: "\u062f.\u0643.\u200f",
            decimal_digits: 3,
            rounding: 0,
            code: "KWD",
            name_plural: "Kuwaiti dinars",
          },
          {
            symbol: "KZT",
            name: "Kazakhstani Tenge",
            symbol_native: "\u0442\u04a3\u0433.",
            decimal_digits: 2,
            rounding: 0,
            code: "KZT",
            name_plural: "Kazakhstani tenges",
          },
          {
            symbol: "LB\xa3",
            name: "Lebanese Pound",
            symbol_native: "\u0644.\u0644.\u200f",
            decimal_digits: 0,
            rounding: 0,
            code: "LBP",
            name_plural: "Lebanese pounds",
          },
          {
            symbol: "SLRs",
            name: "Sri Lankan Rupee",
            symbol_native: "SL Re",
            decimal_digits: 2,
            rounding: 0,
            code: "LKR",
            name_plural: "Sri Lankan rupees",
          },
          {
            symbol: "Lt",
            name: "Lithuanian Litas",
            symbol_native: "Lt",
            decimal_digits: 2,
            rounding: 0,
            code: "LTL",
            name_plural: "Lithuanian litai",
          },
          {
            symbol: "Ls",
            name: "Latvian Lats",
            symbol_native: "Ls",
            decimal_digits: 2,
            rounding: 0,
            code: "LVL",
            name_plural: "Latvian lati",
          },
          {
            symbol: "LD",
            name: "Libyan Dinar",
            symbol_native: "\u062f.\u0644.\u200f",
            decimal_digits: 3,
            rounding: 0,
            code: "LYD",
            name_plural: "Libyan dinars",
          },
          {
            symbol: "MAD",
            name: "Moroccan Dirham",
            symbol_native: "\u062f.\u0645.\u200f",
            decimal_digits: 2,
            rounding: 0,
            code: "MAD",
            name_plural: "Moroccan dirhams",
          },
          {
            symbol: "MDL",
            name: "Moldovan Leu",
            symbol_native: "MDL",
            decimal_digits: 2,
            rounding: 0,
            code: "MDL",
            name_plural: "Moldovan lei",
          },
          {
            symbol: "MGA",
            name: "Malagasy Ariary",
            symbol_native: "MGA",
            decimal_digits: 0,
            rounding: 0,
            code: "MGA",
            name_plural: "Malagasy Ariaries",
          },
          {
            symbol: "MKD",
            name: "Macedonian Denar",
            symbol_native: "MKD",
            decimal_digits: 2,
            rounding: 0,
            code: "MKD",
            name_plural: "Macedonian denari",
          },
          {
            symbol: "MMK",
            name: "Myanma Kyat",
            symbol_native: "K",
            decimal_digits: 0,
            rounding: 0,
            code: "MMK",
            name_plural: "Myanma kyats",
          },
          {
            symbol: "MOP$",
            name: "Macanese Pataca",
            symbol_native: "MOP$",
            decimal_digits: 2,
            rounding: 0,
            code: "MOP",
            name_plural: "Macanese patacas",
          },
          {
            symbol: "MURs",
            name: "Mauritian Rupee",
            symbol_native: "MURs",
            decimal_digits: 0,
            rounding: 0,
            code: "MUR",
            name_plural: "Mauritian rupees",
          },
          {
            symbol: "MX$",
            name: "Mexican Peso",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "MXN",
            name_plural: "Mexican pesos",
          },
          {
            symbol: "RM",
            name: "Malaysian Ringgit",
            symbol_native: "RM",
            decimal_digits: 2,
            rounding: 0,
            code: "MYR",
            name_plural: "Malaysian ringgits",
          },
          {
            symbol: "MTn",
            name: "Mozambican Metical",
            symbol_native: "MTn",
            decimal_digits: 2,
            rounding: 0,
            code: "MZN",
            name_plural: "Mozambican meticals",
          },
          {
            symbol: "N$",
            name: "Namibian Dollar",
            symbol_native: "N$",
            decimal_digits: 2,
            rounding: 0,
            code: "NAD",
            name_plural: "Namibian dollars",
          },
          {
            symbol: "\u20a6",
            name: "Nigerian Naira",
            symbol_native: "\u20a6",
            decimal_digits: 2,
            rounding: 0,
            code: "NGN",
            name_plural: "Nigerian nairas",
          },
          {
            symbol: "C$",
            name: "Nicaraguan C\xf3rdoba",
            symbol_native: "C$",
            decimal_digits: 2,
            rounding: 0,
            code: "NIO",
            name_plural: "Nicaraguan c\xf3rdobas",
          },
          {
            symbol: "Nkr",
            name: "Norwegian Krone",
            symbol_native: "kr",
            decimal_digits: 2,
            rounding: 0,
            code: "NOK",
            name_plural: "Norwegian kroner",
          },
          {
            symbol: "NPRs",
            name: "Nepalese Rupee",
            symbol_native: "\u0928\u0947\u0930\u0942",
            decimal_digits: 2,
            rounding: 0,
            code: "NPR",
            name_plural: "Nepalese rupees",
          },
          {
            symbol: "NZ$",
            name: "New Zealand Dollar",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "NZD",
            name_plural: "New Zealand dollars",
          },
          {
            symbol: "OMR",
            name: "Omani Rial",
            symbol_native: "\u0631.\u0639.\u200f",
            decimal_digits: 3,
            rounding: 0,
            code: "OMR",
            name_plural: "Omani rials",
          },
          {
            symbol: "B/.",
            name: "Panamanian Balboa",
            symbol_native: "B/.",
            decimal_digits: 2,
            rounding: 0,
            code: "PAB",
            name_plural: "Panamanian balboas",
          },
          {
            symbol: "S/.",
            name: "Peruvian Nuevo Sol",
            symbol_native: "S/.",
            decimal_digits: 2,
            rounding: 0,
            code: "PEN",
            name_plural: "Peruvian nuevos soles",
          },
          {
            symbol: "\u20b1",
            name: "Philippine Peso",
            symbol_native: "\u20b1",
            decimal_digits: 2,
            rounding: 0,
            code: "PHP",
            name_plural: "Philippine pesos",
          },
          {
            symbol: "PKRs",
            name: "Pakistani Rupee",
            symbol_native: "\u20a8",
            decimal_digits: 0,
            rounding: 0,
            code: "PKR",
            name_plural: "Pakistani rupees",
          },
          {
            symbol: "z\u0142",
            name: "Polish Zloty",
            symbol_native: "z\u0142",
            decimal_digits: 2,
            rounding: 0,
            code: "PLN",
            name_plural: "Polish zlotys",
          },
          {
            symbol: "\u20b2",
            name: "Paraguayan Guarani",
            symbol_native: "\u20b2",
            decimal_digits: 0,
            rounding: 0,
            code: "PYG",
            name_plural: "Paraguayan guaranis",
          },
          {
            symbol: "QR",
            name: "Qatari Rial",
            symbol_native: "\u0631.\u0642.\u200f",
            decimal_digits: 2,
            rounding: 0,
            code: "QAR",
            name_plural: "Qatari rials",
          },
          {
            symbol: "RON",
            name: "Romanian Leu",
            symbol_native: "RON",
            decimal_digits: 2,
            rounding: 0,
            code: "RON",
            name_plural: "Romanian lei",
          },
          {
            symbol: "din.",
            name: "Serbian Dinar",
            symbol_native: "\u0434\u0438\u043d.",
            decimal_digits: 0,
            rounding: 0,
            code: "RSD",
            name_plural: "Serbian dinars",
          },
          {
            symbol: "RUB",
            name: "Russian Ruble",
            symbol_native: "\u0440\u0443\u0431.",
            decimal_digits: 2,
            rounding: 0,
            code: "RUB",
            name_plural: "Russian rubles",
          },
          {
            symbol: "RWF",
            name: "Rwandan Franc",
            symbol_native: "FR",
            decimal_digits: 0,
            rounding: 0,
            code: "RWF",
            name_plural: "Rwandan francs",
          },
          {
            symbol: "SR",
            name: "Saudi Riyal",
            symbol_native: "\u0631.\u0633.\u200f",
            decimal_digits: 2,
            rounding: 0,
            code: "SAR",
            name_plural: "Saudi riyals",
          },
          {
            symbol: "SDG",
            name: "Sudanese Pound",
            symbol_native: "SDG",
            decimal_digits: 2,
            rounding: 0,
            code: "SDG",
            name_plural: "Sudanese pounds",
          },
          {
            symbol: "Skr",
            name: "Swedish Krona",
            symbol_native: "kr",
            decimal_digits: 2,
            rounding: 0,
            code: "SEK",
            name_plural: "Swedish kronor",
          },
          {
            symbol: "S$",
            name: "Singapore Dollar",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "SGD",
            name_plural: "Singapore dollars",
          },
          {
            symbol: "Ssh",
            name: "Somali Shilling",
            symbol_native: "Ssh",
            decimal_digits: 0,
            rounding: 0,
            code: "SOS",
            name_plural: "Somali shillings",
          },
          {
            symbol: "SY\xa3",
            name: "Syrian Pound",
            symbol_native: "\u0644.\u0633.\u200f",
            decimal_digits: 0,
            rounding: 0,
            code: "SYP",
            name_plural: "Syrian pounds",
          },
          {
            symbol: "\u0e3f",
            name: "Thai Baht",
            symbol_native: "\u0e3f",
            decimal_digits: 2,
            rounding: 0,
            code: "THB",
            name_plural: "Thai baht",
          },
          {
            symbol: "DT",
            name: "Tunisian Dinar",
            symbol_native: "\u062f.\u062a.\u200f",
            decimal_digits: 3,
            rounding: 0,
            code: "TND",
            name_plural: "Tunisian dinars",
          },
          {
            symbol: "T$",
            name: "Tongan Pa\u02bbanga",
            symbol_native: "T$",
            decimal_digits: 2,
            rounding: 0,
            code: "TOP",
            name_plural: "Tongan pa\u02bbanga",
          },
          {
            symbol: "TL",
            name: "Turkish Lira",
            symbol_native: "TL",
            decimal_digits: 2,
            rounding: 0,
            code: "TRY",
            name_plural: "Turkish Lira",
          },
          {
            symbol: "TT$",
            name: "Trinidad and Tobago Dollar",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "TTD",
            name_plural: "Trinidad and Tobago dollars",
          },
          {
            symbol: "NT$",
            name: "New Taiwan Dollar",
            symbol_native: "NT$",
            decimal_digits: 2,
            rounding: 0,
            code: "TWD",
            name_plural: "New Taiwan dollars",
          },
          {
            symbol: "TSh",
            name: "Tanzanian Shilling",
            symbol_native: "TSh",
            decimal_digits: 0,
            rounding: 0,
            code: "TZS",
            name_plural: "Tanzanian shillings",
          },
          {
            symbol: "\u20b4",
            name: "Ukrainian Hryvnia",
            symbol_native: "\u20b4",
            decimal_digits: 2,
            rounding: 0,
            code: "UAH",
            name_plural: "Ukrainian hryvnias",
          },
          {
            symbol: "USh",
            name: "Ugandan Shilling",
            symbol_native: "USh",
            decimal_digits: 0,
            rounding: 0,
            code: "UGX",
            name_plural: "Ugandan shillings",
          },
          {
            symbol: "$U",
            name: "Uruguayan Peso",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "UYU",
            name_plural: "Uruguayan pesos",
          },
          {
            symbol: "$",
            name: "US Dollar",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "USD",
            name_plural: "US dollars",
          },
          {
            symbol: "UZS",
            name: "Uzbekistan Som",
            symbol_native: "UZS",
            decimal_digits: 0,
            rounding: 0,
            code: "UZS",
            name_plural: "Uzbekistan som",
          },
          {
            symbol: "Bs.F.",
            name: "Venezuelan Bol\xedvar",
            symbol_native: "Bs.F.",
            decimal_digits: 2,
            rounding: 0,
            code: "VEF",
            name_plural: "Venezuelan bol\xedvars",
          },
          {
            symbol: "\u20ab",
            name: "Vietnamese Dong",
            symbol_native: "\u20ab",
            decimal_digits: 0,
            rounding: 0,
            code: "VND",
            name_plural: "Vietnamese dong",
          },
          {
            symbol: "FCFA",
            name: "CFA Franc BEAC",
            symbol_native: "FCFA",
            decimal_digits: 0,
            rounding: 0,
            code: "XAF",
            name_plural: "CFA francs BEAC",
          },
          {
            symbol: "CFA",
            name: "CFA Franc BCEAO",
            symbol_native: "CFA",
            decimal_digits: 0,
            rounding: 0,
            code: "XOF",
            name_plural: "CFA francs BCEAO",
          },
          {
            symbol: "YR",
            name: "Yemeni Rial",
            symbol_native: "\u0631.\u064a.\u200f",
            decimal_digits: 0,
            rounding: 0,
            code: "YER",
            name_plural: "Yemeni rials",
          },
          {
            symbol: "R",
            name: "South African Rand",
            symbol_native: "R",
            decimal_digits: 2,
            rounding: 0,
            code: "ZAR",
            name_plural: "South African rand",
          },
          {
            symbol: "ZK",
            name: "Zambian Kwacha",
            symbol_native: "ZK",
            decimal_digits: 0,
            rounding: 0,
            code: "ZMK",
            name_plural: "Zambian kwachas",
          },
        ],
        pa = function () {
          var e = Ne(),
            a = Object(Ue.a)(e, 2),
            n = a[0].formValues,
            t = a[1];
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              Te.a,
              { item: !0, xs: 12 },
              l.a.createElement(Me.a, { variant: "h6" }, "Additional data")
            ),
            l.a.createElement(
              Te.a,
              { item: !0, xs: 12, sm: 6 },
              l.a.createElement(oa.a, {
                type: "date",
                label: "date",
                name: "date",
                variant: "outlined",
                InputLabelProps: { shrink: !0 },
                fullWidth: !0,
                value: n.date,
                onChange: function (e) {
                  return t({
                    type: "editFormValue",
                    key: "date",
                    value: e.target.value,
                  });
                },
              })
            ),
            l.a.createElement(
              Te.a,
              { item: !0, xs: 12, sm: 6 },
              l.a.createElement(oa.a, {
                label: "Service",
                name: "service",
                variant: "outlined",
                fullWidth: !0,
                value: n.service,
                onChange: function (e) {
                  return t({
                    type: "editFormValue",
                    key: "service",
                    value: e.target.value,
                  });
                },
              })
            ),
            l.a.createElement(
              Te.a,
              { item: !0, xs: 12 },
              l.a.createElement(Me.a, { variant: "h6" }, "Social Network?")
            ),
            l.a.createElement(
              Te.a,
              { item: !0, xs: 12, sm: 6 },
              l.a.createElement(oa.a, {
                label: "facebook",
                name: "facebook",
                variant: "outlined",
                fullWidth: !0,
                value: n.facebook,
                onChange: function (e) {
                  return t({
                    type: "editFormValue",
                    key: "facebook",
                    value: e.target.value,
                  });
                },
              })
            ),
            l.a.createElement(
              Te.a,
              { item: !0, xs: 12, sm: 6 },
              l.a.createElement(oa.a, {
                label: "twitter",
                name: "twitter",
                variant: "outlined",
                fullWidth: !0,
                value: n.twitter,
                onChange: function (e) {
                  return t({
                    type: "editFormValue",
                    key: "twitter",
                    value: e.target.value,
                  });
                },
              })
            )
          );
        },
        ha = n(9),
        ba = n(484),
        ga = Object(ha.a)(function (e) {
          return {
            alternativeLabel: { top: 22 },
            active: { "& $line": { background: e.palette.primary.main } },
            completed: { "& $line": { background: e.palette.primary.main } },
            line: {
              height: 3,
              border: 0,
              backgroundColor: "#eaeaf0",
              borderRadius: 1,
            },
          };
        })(ba.a),
        ya = "localhost" === window.location.hostname,
        fa = ya ? "http://localhost/" : window.location.hostname,
        va = function () {
          var e = fa + "/publishableKeyGet.php";
          return new Promise(
            (function () {
              var a = Object(Ke.a)(
                Ge.a.mark(function a(n) {
                  var t, l;
                  return Ge.a.wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          if (!ya) {
                            a.next = 6;
                            break;
                          }
                          return (
                            (a.next = 3),
                            new Promise(function (e) {
                              setTimeout(function () {
                                e({
                                  data: {
                                    publishableKey:
                                      "pk_test_nqH70Fb8FmabuVsU5kp4gpYf00XGNeVxyf",
                                  },
                                });
                              }, 50);
                            })
                          );
                        case 3:
                          (a.t0 = a.sent), (a.next = 9);
                          break;
                        case 6:
                          return (a.next = 8), p.a.get(e);
                        case 8:
                          a.t0 = a.sent;
                        case 9:
                          (t = a.t0), (l = t.data.publishableKey), n(l);
                        case 12:
                        case "end":
                          return a.stop();
                      }
                  }, a);
                })
              );
              return function (e) {
                return a.apply(this, arguments);
              };
            })()
          );
        },
        Ea = function (e) {
          var a = fa + "capture.php";
          return new Promise(
            (function () {
              var n = Object(Ke.a)(
                Ge.a.mark(function n(t) {
                  var l, o;
                  return Ge.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), p.a.post(a, e);
                        case 2:
                          (l = n.sent), (o = l.data.clientSecret), t(o);
                        case 5:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              );
              return function (e) {
                return n.apply(this, arguments);
              };
            })()
          );
        },
        _a = function (e) {
          var a = e.staff,
            n = e.arrivaldate,
            t = e.service,
            l = e.fsm,
            o = e.email,
            i = e.currency;
          return {
            amount: 100 * e.amount,
            currency: i.code,
            cardType: "card",
            receipt_email: o,
            metadata: { staff: a, arrivaldate: n, service: t, fsm: l },
          };
        },
        wa = function (e, a) {
          var n = e.firstname,
            t = e.lastname,
            l = e.email,
            o = e.line1,
            i = e.line2,
            r = e.postal_code;
          return {
            payment_method: {
              card: a,
              billing_details: {
                address: {
                  city: e.city,
                  country: e.country.code,
                  line1: o,
                  line2: i,
                  postal_code: r,
                  state: null,
                },
                email: l,
                name: "".concat(n, " ").concat(t),
                phone: null,
              },
            },
          };
        },
        Ca = Object(De.a)(function (e) {
          return {
            button: { marginRight: e.spacing(1) },
            mainBox: {
              position: "relative",
              marginTop: "-8px",
              padding: "20px 20px",
              borderBottomRightRadius: "4px",
              borderBottomLeftRadius: "4px",
              background: e.palette.background.default,
            },
            stepper: { height: "calc(10vh - 40px)", minHeight: "100px" },
            form: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            },
            buttonWrapper: { justifyContent: "flex-end" },
          };
        }),
        Sa = function (e) {
          switch (e.step) {
            case 0:
              return l.a.createElement(ra, null);
            case 1:
              return l.a.createElement(pa, null);
            case 2:
              return l.a.createElement(ua, null);
            default:
              return l.a.createElement(l.a.Fragment, null);
          }
        },
        ka = function () {
          var e = Ca(),
            a = Object(t.useState)(0),
            n = Object(Ue.a)(a, 2),
            o = n[0],
            i = n[1],
            r = Object(t.useState)(!1),
            c = Object(Ue.a)(r, 2),
            s = c[0],
            m = c[1],
            u = Object(t.useState)(!0),
            d = Object(Ue.a)(u, 2),
            p = d[0],
            h = d[1],
            b = Object(t.useState)(""),
            g = Object(Ue.a)(b, 2),
            y = g[0],
            f = g[1],
            v = Object(sa.useStripe)(),
            E = Object(sa.useElements)(),
            _ = Ne(),
            w = Object(Ue.a)(_, 2),
            C = w[0].formValues,
            S = w[1],
            k = function () {
              return i(function (e) {
                return e - 1;
              });
            },
            N = (function () {
              var e = Object(Ke.a)(
                Ge.a.mark(function e() {
                  var a, n, t, l, o, r, c;
                  return Ge.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return m(!0), (a = _a(C)), (e.next = 4), Ea(a);
                        case 4:
                          return (
                            (n = e.sent),
                            (t = E.getElement(sa.CardCvcElement)),
                            (l = wa(C, t)),
                            (e.next = 9),
                            v.confirmCardPayment(n, l)
                          );
                        case 9:
                          (o = e.sent),
                            (r = o.paymentIntent),
                            (c = o.error)
                              ? (h(!1), f(c.message))
                              : r &&
                                "succeeded" === r.status &&
                                (h(!0), f(""), S({ type: "emptyFormValue" })),
                            i(function (e) {
                              return e + 1;
                            }),
                            m(!1);
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              ze.a,
              {
                alternativeLabel: !0,
                className: e.stepper,
                connector: l.a.createElement(ga, null),
                activeStep: o,
              },
              [1, 2, 3].map(function (e) {
                return l.a.createElement(
                  Ye.a,
                  { key: e },
                  l.a.createElement($e.a, { StepIconComponent: la })
                );
              })
            ),
            l.a.createElement(
              He.a,
              { className: e.mainBox },
              3 === o
                ? l.a.createElement(
                    Te.a,
                    {
                      container: !0,
                      spacing: 3,
                      direction: "column",
                      justify: "space-around",
                      alignItems: "center",
                      style: { height: "400px" },
                    },
                    p
                      ? l.a.createElement(Je.a, {
                          fontSize: "large",
                          color: "primary",
                        })
                      : l.a.createElement(Qe.a, {
                          fontSize: "large",
                          color: "error",
                        }),
                    l.a.createElement(Me.a, { variant: "h4" }, y),
                    l.a.createElement(
                      qe.a,
                      {
                        onClick: p
                          ? function () {
                              return i(0);
                            }
                          : k,
                        className: e.button,
                      },
                      p ? "Reset" : "Back"
                    )
                  )
                : l.a.createElement(
                    "form",
                    {
                      autoComplete: "off",
                      className: e.form,
                      onSubmit: function (e) {
                        e.preventDefault(),
                          2 === o
                            ? N()
                            : i(function (e) {
                                return e + 1;
                              });
                      },
                    },
                    l.a.createElement(
                      Te.a,
                      { container: !0, spacing: 3 },
                      l.a.createElement(Sa, { step: o }),
                      l.a.createElement(
                        Te.a,
                        { container: !0, item: !0, justify: "flex-end" },
                        l.a.createElement(
                          qe.a,
                          {
                            disabled: 0 === o,
                            className: e.button,
                            onClick: k,
                          },
                          "Back"
                        ),
                        l.a.createElement(
                          qe.a,
                          {
                            variant: "contained",
                            color: "primary",
                            className: e.button,
                            type: "submit",
                            disabled: s,
                          },
                          s
                            ? l.a.createElement(Ze.a, { size: 24 })
                            : 2 === o
                            ? "Pay"
                            : "Next"
                        )
                      )
                    )
                  )
            )
          );
        },
        Na = n(310),
        Aa = Object(De.a)(function (e) {
          return {
            boxWrapper: {
              marginBottom: "55px",
              minHeight: "calc(26vh + 260px)",
            },
            container: {
              position: "relative",
              zIndex: "1100",
              marginTop: "-95px",
              marginBottom: "45px",
            },
          };
        }),
        Oa = function () {
          var e = Aa(),
            a = Object(t.useState)(null),
            n = Object(Ue.a)(a, 2),
            o = n[0],
            i = n[1];
          return (
            Object(t.useEffect)(function () {
              (function () {
                var e = Object(Ke.a)(
                  Ge.a.mark(function e() {
                    var a, n;
                    return Ge.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), va();
                          case 2:
                            (a = e.sent), (n = Object(Na.a)(a)), i(n);
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()();
            }, []),
            l.a.createElement(
              He.a,
              { component: "main", className: e.boxWrapper },
              l.a.createElement(
                Ve.a,
                { maxWidth: "md", className: e.container },
                l.a.createElement(
                  We.a,
                  { elevation: 5 },
                  o
                    ? l.a.createElement(
                        sa.Elements,
                        { stripe: o },
                        l.a.createElement(ka, null)
                      )
                    : null
                )
              )
            )
          );
        },
        Ra = n(544),
        xa = n(549),
        Ia = n(570),
        Pa = n(545),
        ja = n(546),
        Ta = n(547),
        Ma = n(548),
        Da = function (e) {
          var a = e.separator,
            n = Object(t.useState)(!1),
            o = Object(Ue.a)(n, 2),
            i = o[0],
            r = o[1],
            c = Object(t.useState)("legal"),
            s = Object(Ue.a)(c, 2),
            m = s[0],
            u = s[1],
            d = function (e) {
              e.preventDefault(), u(e.target.name), r(!0);
            },
            p = {
              legal: {
                name: "legal",
                title: "Legal Notice",
                description: function () {
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    "This website is owned and operated by _________.",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    "To contact us:",
                    l.a.createElement("br", null),
                    "Name",
                    l.a.createElement("br", null),
                    "Address line",
                    l.a.createElement("br", null),
                    "postcode city",
                    l.a.createElement("br", null),
                    "country",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    "Phone: ___________"
                  );
                },
              },
              privacy: {
                name: "privacy",
                title: "Privacy Notice",
                description: function () {
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    "The present website, including all information and materials contained on it, are managed and controlled by _________, ADDRESS.",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    "Our contact details are provided on our Legal Notice.",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    "The terms and conditions set out in this Privacy Notice apply in conjunction with the more detailed Privacy Policies.",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    l.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "Our Commitment"
                    ),
                    "We are committed to respecting and ensuring the privacy of all the users of this website.",
                    l.a.createElement("br", null),
                    "We will be transparent about the purposes for which we collect data, including personal data, and about the kinds of data we collect and how we use them.",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    l.a.createElement(Me.a, { variant: "h6" }, "Your Consent"),
                    "By using this website, you consent to the terms of this Privacy Notice.",
                    l.a.createElement("br", null),
                    "We may change the terms of this Notice and these Policies from time to time.",
                    l.a.createElement("br", null),
                    "If such changes are made, we will promptly place notices on all the websites so that you can be aware of those changes.",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    "Your continued use of this websites subsequent to such notified changes will mean that you accept those changes, and will be on the terms of this Privacy Notice and those Privacy Policies, as amended from time to time.",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    "What types of information do we collect and store?",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    l.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "Personal Information"
                    ),
                    "You can access most of the pages on the website without telling us who you are and without revealing any personal information.",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    "We do not collect personal information (such as your name, address, phone number or e-mail address, or other personal details) on the website unless you choose to provide them.",
                    l.a.createElement("br", null),
                    "For example, where you express an interest in joining or donating to one of our organizations, subscribe to our email updates, or buy a book or CD or DVD, we will often provide you with an online form that you can fill in and submit online.",
                    l.a.createElement("br", null),
                    'In all these cases, we will inform you of the purpose of the form (unless that is obvious) and provide you with options as concerns the uses of the data (see below: "Your Rights: Right to object").',
                    l.a.createElement("br", null),
                    "We only collect personal information that is relevant and adequate and not excessive for the purposes in question.",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    'Non-personal, aggregate data; the use of "cookies" and of Google Analytics',
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    l.a.createElement(Me.a, { variant: "h6" }, "General"),
                    "Our web servers create anonymous logs during user visits to the website, which are used by us to create aggregate statistics, for example about when the website is accessed, the pages which refer visitors to the website, the type of web browsers visitors use and which pages are viewed.",
                    l.a.createElement("br", null),
                    "These statistics help us understand how the website is used and provide us with valuable information for improving it in the future.",
                    l.a.createElement("br", null),
                    'In this, we use both our own "cookies" and a special tool, Google Analytics, as described below.',
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    l.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "Use of Cookies"
                    ),
                    "A cookie is a text-only piece of information that a website transfers to your computer's hard disk so that the website can remember who you are.",
                    l.a.createElement("br", null),
                    'A cookie will normally contain the name of the Internet domain from which the cookie has come, the "lifetime" of the cookie, and a value, usually a randomly generated unique number.',
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    "We use cookies and collect IP addresses (an IP address is a number that can uniquely identify a specific computer or other network device on the internet).",
                    l.a.createElement("br", null),
                    "We use our own analysis software to look at IP addresses and cookies for the purpose of enhancing your user experience.",
                    l.a.createElement("br", null),
                    "This information is not used to develop a personal profile of you.",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    "Users have the opportunity to set their devices to accept all cookies, to notify them when a cookie is issued, or not to receive cookies at any time.",
                    l.a.createElement("br", null),
                    "To prevent the download of cookies, or otherwise control how cookies are used on your computer, please read the help information supplied with your Internet browser software or go to: ",
                    l.a.createElement(
                      Ra.a,
                      {
                        href: "http://www.allaboutcookies.org",
                        target: "_blank",
                      },
                      "http://www.allaboutcookies.org"
                    ),
                    ".",
                    l.a.createElement("br", null),
                    "However please note that if you do this you may not be able to use the full functionality of this website.",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    l.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "Google Analytics"
                    ),
                    "Our website also uses Google Analytics, a web analytics service provided by Google, Inc. (\u201cGoogle\u201d).",
                    l.a.createElement("br", null),
                    "Google Analytics uses \u201ccookies\u201d to help the website analyze how users use the site (as described above).",
                    l.a.createElement("br", null),
                    "The information generated by the Google Analytics cookie about your use of the website (including a truncated IP address: see below) will be transmitted to and stored by Google on their servers.",
                    l.a.createElement("br", null),
                    "Google will use this information for the purpose of evaluating your use of the website, compiling reports on website activity for website operators such as us, and providing other services relating to website activity and internet usage. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google's behalf.",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    "As explained above, you may refuse the use of cookies\u2014and thus also the use of the Google Analytics cookie\u2014by selecting the appropriate settings on your browser, but this too may affect the extent to which you can fully use the website.",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    l.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "Your Agreement"
                    ),
                    "In accordance to what we already said at the beginning of this Notice, by using this website, you consent to the processing of data about you, and of aggregate data, by us and by Google in the manner and for the purposes set out above.",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    l.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "How do we use information collected?"
                    ),
                    "Your personal information will be retained by us and its service providers in a secure environment, will be kept confidential, and will only be used in connection with the purposes for which it is submitted, or as necessary for us to comply with our legal obligations.",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    l.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "Sharing of your personal information?"
                    ),
                    "Other than as described below, the information you provide will not be sold or rented nor will it be shared with any person or entity unrelated to our company, unless we are required to disclose the information by law.",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    "We may share relevant personal data, obtained through this website for hosting and processing:",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    "Our website may be hosted by a third party service provider and therefore any personal details you submit through this website may be processed by such a third party service provider.",
                    l.a.createElement("br", null),
                    'We may also use other third parties to process some of your personal details, for example to send you books or other goods you have ordered (so-called "fulfillment").',
                    l.a.createElement("br", null),
                    "All of these third party services providers will process your personal information only on our behalf and will be bound by strict confidentiality conditions.",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    l.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "Payment processing and fraud"
                    ),
                    "Your card or other details may be disclosed to banks or relevant financial institutions to arrange payments.",
                    l.a.createElement("br", null),
                    "In the case of a suspected fraudulent transaction, your details may be further disclosed for the sole purpose of performing further checks (for example, disclosure to a credit checking agency).",
                    l.a.createElement("br", null),
                    "Trans-border data flows",
                    l.a.createElement("br", null),
                    "If you have accessed this webpage from within the European Union or the European Economic Area, you should be aware that the disclosure of your personal information discussed above will involve transfer of that information to us.",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    l.a.createElement(Me.a, { variant: "h6" }, "Your Rights"),
                    "Right of access to your personal information:",
                    l.a.createElement("br", null),
                    "You have a right of access to any personal information that we collect about you on this website and that is retrievable from this website by reference to you personally.",
                    l.a.createElement("br", null),
                    "Right of correction:",
                    l.a.createElement("br", null),
                    "You have a right to correct the information we hold on you, or to have it deleted, if it is incorrect, irrelevant or out of date.",
                    l.a.createElement("br", null),
                    "Right to object:",
                    l.a.createElement("br", null),
                    "When we ask for your contact information in various forms, we will explain to you what we want to use those details for, and we will offer you options in regard of their use.",
                    l.a.createElement("br", null),
                    "Specifically, we will explain if we want to use certain information, such as your phone number or mobile phone number or email address, to contact you.",
                    l.a.createElement("br", null),
                    "You can also, at any time, let us know by simple email if you do not want to be contacted any more, either in general or by certain special means (e.g., by text or phone call).",
                    l.a.createElement("br", null),
                    "We will then, within a short period, ensure that such follow-up contacts are stopped.",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    l.a.createElement(
                      Me.a,
                      { variant: "subtitle2" },
                      "IF YOU HAVE ANY QUESTIONS ABOUT THIS PRIVACY NOTICE OR OUR PRIVACY POLICES; OR IF YOU WANT TO EXERCISE ANY OF THE ABOVE-MENTIONED RIGHTS."
                    )
                  );
                },
              },
              tou: {
                name: "tou",
                title: "Terms of Use",
                description: function () {
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    "This website featured to you is subject to the following Terms and our Privacy Notice. If you visit our websites you accept these conditions.",
                    l.a.createElement("br", null),
                    "Please read them carefully.",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    l.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "1. Scope and Addressees"
                    ),
                    'This website is operated and administered by _______ (see "Legal Notice"), and therefore complies with the applicable laws.',
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    l.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "2. Data Privacy Protection"
                    ),
                    'Personally identifiable data of the user of this website will be collected, used and processed in compliance with applicable laws on data privacy protection and our "Privacy Notice".',
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    l.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "3. Intellectual Property Rights"
                    ),
                    "All materials available on this site are protected by copyright laws and international copyright treaty provisions.",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    l.a.createElement(Me.a, { variant: "h6" }, "4. Hyperlinks"),
                    "The Site may contain hyperlinks to the web pages of third parties.",
                    l.a.createElement("br", null),
                    "We shall have no liability for the contents of such web pages and does not make representations about or endorse such web pages or their contents as its own, as we do not control the information on such web pages and is not responsible for the contents and information given thereon. The use of such web pages shall be at the sole risk of the user.",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    l.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "5. Applicable Law, Place of Jurisdiction"
                    ),
                    "These Terms of Use including its disclaimers, terms and conditions shall be governed by\u2014and all disputes relating to or in connection with these Terms of Use or their subject matter shall be resolved in accordance with\u2014the European laws, without giving effect to any principles of conflicts of laws.",
                    l.a.createElement("br", null),
                    "We reserve the right to make changes to this site and these disclaimers, terms and conditions at any time.",
                    l.a.createElement("br", null),
                    "User hereby irrevocably and unconditionally consents to submit to the exclusive jurisdiction of the European court for any litigation arising out of or relating to use of this site (and agrees not to commence any litigation relating thereto except in such courts) waives any objection to the laying of venue of any such litigation.",
                    l.a.createElement("br", null),
                    l.a.createElement("br", null),
                    l.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "6. Severability"
                    ),
                    "The provisions of these Terms of Use are intended to be severable. If for any reason any provision of these Terms of Use shall be held invalid or unenforceable in whole or in part in any jurisdiction, such provision shall, as to such jurisdiction, be ineffective to the extent of such invalidity or unenforceability without in any manner affecting the validity or enforceability thereof in any other jurisdiction or the remaining provisions hereof in any jurisdiction.",
                    l.a.createElement("br", null)
                  );
                },
              },
              trademarks: {
                name: "trademarks",
                title: "Trademarks",
                description: function () {
                  return l.a.createElement(
                    l.a.Fragment,
                    null,
                    "All materials available on this site are protected by copyright laws and international copyright treaty provisions.",
                    l.a.createElement("br", null),
                    "This material has been placed on this Internet site under the authority of the copyright owner for the sole purpose of viewing of the materials by users of this site.",
                    l.a.createElement("br", null)
                  );
                },
              },
            };
          return l.a.createElement(
            Me.a,
            { variant: "caption" },
            Object.keys(p).map(function (e, n) {
              return l.a.createElement(
                "span",
                { key: n },
                n > 0 && a,
                "\xa0",
                l.a.createElement(
                  Ra.a,
                  { href: "#", name: p[e].name, onClick: d },
                  p[e].title
                )
              );
            }),
            l.a.createElement(
              Ia.a,
              {
                open: i,
                onClose: function () {
                  return r(!1);
                },
                "aria-labelledby": "dialog-title",
                "aria-describedby": "dialog-description",
              },
              l.a.createElement(
                Pa.a,
                { id: "dialog-title", color: "primary" },
                p[m].title
              ),
              l.a.createElement(
                ja.a,
                null,
                l.a.createElement(
                  Ta.a,
                  { id: "dialog-description" },
                  p[m].description()
                )
              ),
              l.a.createElement(
                Ma.a,
                null,
                l.a.createElement(
                  qe.a,
                  {
                    onClick: function () {
                      return r(!1);
                    },
                    color: "primary",
                    autoFocus: !0,
                  },
                  "Close"
                )
              )
            )
          );
        },
        La = function () {
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              Te.a,
              {
                container: !0,
                justify: "center",
                style: { minHeight: "212px" },
              },
              l.a.createElement(
                Te.a,
                {
                  container: !0,
                  item: !0,
                  sm: 6,
                  xs: 11,
                  justify: "space-between",
                },
                l.a.createElement(
                  Te.a,
                  { item: !0, sm: 5, xs: 12 },
                  l.a.createElement(xa.a, { color: "action" }),
                  l.a.createElement(
                    Me.a,
                    { paragraph: !0 },
                    "The donations made on this site are sent through a secured connection and processed by Stripe. This site is compliant with the Payment Card Industry and Data Security Standard. Read more about Stripe security ",
                    l.a.createElement(
                      Ra.a,
                      {
                        href: "https://stripe.com/docs/security/stripe",
                        target: "_blank",
                        alt: "Stripe",
                      },
                      "here"
                    ),
                    "."
                  )
                ),
                l.a.createElement(
                  Te.a,
                  { item: !0, sm: 5, xs: 11 },
                  l.a.createElement(aa.a, { color: "action" }),
                  l.a.createElement(
                    Me.a,
                    { paragraph: !0 },
                    "This Web App is fully responsive. Made in ",
                    l.a.createElement(
                      Ra.a,
                      { href: "https://reactjs.org/", target: "_blank" },
                      "ReactJS"
                    ),
                    ", using ",
                    l.a.createElement(
                      Ra.a,
                      { href: "https://material-ui.com", target: "_blank" },
                      "Material-UI"
                    ),
                    " and ",
                    l.a.createElement(
                      Ra.a,
                      {
                        href: "https://stripe.com/docs/stripe-js/react",
                        target: "_blank",
                      },
                      "React Stripe"
                    ),
                    ". It's given free of use by ",
                    l.a.createElement(
                      Ra.a,
                      { href: "https://angeloron.com", target: "_blank" },
                      "Ange loron"
                    ),
                    ". react-material-ui-stripe-payment is under the MIT license and can be dowloaded ",
                    l.a.createElement(
                      Ra.a,
                      {
                        href:
                          "https://gitlab.com/angeloron/react-material-ui-stripe-payment",
                        target: "_blank",
                      },
                      "here"
                    ),
                    "."
                  )
                )
              )
            ),
            l.a.createElement(
              Pe.a,
              {
                position: "static",
                elevation: 0,
                component: "footer",
                color: "default",
              },
              l.a.createElement(
                je.a,
                { style: { justifyContent: "center" } },
                l.a.createElement(Me.a, { variant: "caption" }, "\xa92020"),
                " ",
                l.a.createElement(Da, { separator: "\xa0\u16eb" })
              )
            )
          );
        },
        Fa = n(550),
        Ba = n(551),
        Ga = function () {
          var e = Object(t.useState)(!1),
            a = Object(Ue.a)(e, 2),
            n = a[0],
            o = a[1];
          return (
            Object(t.useEffect)(function () {
              null ===
                (function (e) {
                  for (
                    var a = e + "=", n = document.cookie.split(";"), t = 0;
                    t < n.length;
                    t++
                  ) {
                    for (var l = n[t]; " " === l.charAt(0); )
                      l = l.substring(1, l.length);
                    if (0 === l.indexOf(a))
                      return l.substring(a.length, l.length);
                  }
                  return null;
                })("CookieAuth") && o(!0),
                (function (e, a, n) {
                  var t = "";
                  if (n) {
                    var l = new Date();
                    l.setTime(l.getTime() + 24 * n * 60 * 60 * 1e3),
                      (t = "; expires=" + l.toUTCString());
                  }
                  document.cookie = e + "=" + (a || "") + t + "; path=/";
                })("CookieAuth", 1, 7);
            }, []),
            n
              ? l.a.createElement(
                  Pe.a,
                  {
                    position: "fixed",
                    elevation: 0,
                    component: "div",
                    color: "default",
                    style: { top: "auto", bottom: 0 },
                  },
                  l.a.createElement(
                    je.a,
                    { style: { justifyContent: "center" } },
                    l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(
                        Me.a,
                        { variant: "caption" },
                        "By using our site, you acknowledge that you have read and understand our"
                      ),
                      l.a.createElement(Da, { separator: "," })
                    ),
                    l.a.createElement(
                      Fa.a,
                      {
                        onClick: function () {
                          return o(!1);
                        },
                        size: "small",
                        style: { marginLeft: "10px", minWidth: "40px" },
                      },
                      l.a.createElement(Ba.a, null)
                    )
                  )
                )
              : null
          );
        },
        Ka = (function (e) {
          Object(m.a)(n, e);
          var a = Object(u.a)(n);
          function n() {
            var e;
            Object(c.a)(this, n);
            for (var t = arguments.length, l = new Array(t), o = 0; o < t; o++)
              l[o] = arguments[o];
            return (
              ((e = a.call.apply(
                a,
                [this].concat(l)
              )).componentDidMount = function () {
                var a = e.props.match.params.id.split("&"),
                  n = a[0],
                  t = a[1],
                  l = {},
                  o = {};
                if ("sponsoring" === t) {
                  var i = Object(L.a)(e.context.user.sponsoring);
                  i.push(n), (l = { sponsoring: i });
                } else if ("adopted" === t) {
                  var r = Object(L.a)(e.context.user.adoption);
                  r.push(n),
                    (l = { adoption: r }),
                    (o = { adopted: !0 }),
                    console.log(o);
                }
                w(n, o)
                  .then(function () {
                    C(e.context.user._id, l).catch(function (e) {
                      console.log(e);
                    });
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              }),
              e
            );
          }
          return (
            Object(s.a)(n, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    Ae.a,
                    { theme: Ie },
                    l.a.createElement(
                      ke,
                      null,
                      l.a.createElement(
                        "div",
                        { style: { flexGrow: 1 } },
                        l.a.createElement(Fe, { title: "PAYMENT FORM" }),
                        l.a.createElement(Oa, null),
                        l.a.createElement(La, null)
                      ),
                      l.a.createElement(Ga, null)
                    )
                  );
                },
              },
            ]),
            n
          );
        })(t.Component);
      Ka.contextType = O;
      var Ua = I(Ka),
        Ha =
          (n(179),
          (function (e) {
            Object(m.a)(n, e);
            var a = Object(u.a)(n);
            function n() {
              var e;
              Object(c.a)(this, n);
              for (
                var t = arguments.length, l = new Array(t), o = 0;
                o < t;
                o++
              )
                l[o] = arguments[o];
              return (
                ((e = a.call.apply(a, [this].concat(l))).state = {
                  typeoffunding: "sponsoring",
                }),
                e
              );
            }
            return (
              Object(s.a)(n, [
                {
                  key: "render",
                  value: function () {
                    return l.a.createElement(
                      "div",
                      { className: "puncSponsor" },
                      l.a.createElement(T, null),
                      l.a.createElement(
                        "div",
                        { className: "quote" },
                        '"It seems to me that the natural world is the greatest source of excitement; the greatest source of visual beauty, the greatest source of intellectual interest. It is the greatest source of so much in life that makes life worth living."',
                        l.a.createElement("br", null),
                        l.a.createElement(
                          "span",
                          null,
                          "- Sir David Attenborough"
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { className: "PS" },
                        l.a.createElement("h1", null, "Punctual Sponsorship"),
                        l.a.createElement(
                          "p",
                          null,
                          "If you\u2019d prefer not to set up a direct debit you can make a one-off payment of the amount of your choice! Not only will you be providing invaluable care, you will also receive a great gift pack."
                        ),
                        l.a.createElement(
                          "h3",
                          null,
                          "How your money will help :"
                        ),
                        l.a.createElement(
                          "ul",
                          { className: "list" },
                          l.a.createElement(
                            "li",
                            null,
                            "Rescue, care and support the animal of your choice saved from exploitation and captivity"
                          ),
                          l.a.createElement(
                            "li",
                            null,
                            "Provide care for the animal at our sanctuaries (meals, veterinary care, GPS tracking collar...)"
                          ),
                          l.a.createElement(
                            "li",
                            null,
                            "Monitor wild populations to inform conservation efforts"
                          ),
                          l.a.createElement(
                            "li",
                            null,
                            "Run environmental education programmes for local communities and others"
                          ),
                          l.a.createElement(
                            "li",
                            null,
                            "Campaign against exploitation of wildlife and end trophy and canned hunting practices"
                          )
                        ),
                        l.a.createElement("p", null, "and morel..."),
                        l.a.createElement(
                          "h3",
                          null,
                          "Punctual Sponsorship Pack :"
                        ),
                        l.a.createElement(
                          "p",
                          { className: "line" },
                          "To thank you for your sponsorship you will receive :"
                        ),
                        l.a.createElement(
                          "ul",
                          { className: "list" },
                          l.a.createElement(
                            "li",
                            null,
                            "A personalized sponsorship certificate"
                          ),
                          l.a.createElement(
                            "li",
                            null,
                            "A photo of your sponsored animal to print and keep"
                          ),
                          l.a.createElement(
                            "li",
                            null,
                            "A fact sheet about your animal"
                          ),
                          l.a.createElement(
                            "li",
                            null,
                            "A quarterly email including photos and an update on your animal"
                          )
                        ),
                        l.a.createElement(
                          "div",
                          { className: "link-payment" },
                          l.a.createElement(
                            r.b,
                            {
                              to: "/paymentform/"
                                .concat(this.props.match.params.id, "&")
                                .concat(this.state.typeoffunding),
                              style: { color: "#455" },
                            },
                            "Sponsor now !"
                          )
                        )
                      )
                    );
                  },
                },
              ]),
              n
            );
          })(t.Component)),
        Va = (function (e) {
          Object(m.a)(n, e);
          var a = Object(u.a)(n);
          function n() {
            var e;
            Object(c.a)(this, n);
            for (var t = arguments.length, l = new Array(t), o = 0; o < t; o++)
              l[o] = arguments[o];
            return (
              ((e = a.call.apply(a, [this].concat(l))).state = {
                typeoffunding: "sponsoring",
              }),
              e
            );
          }
          return (
            Object(s.a)(n, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "div",
                    { className: "puncSponsor" },
                    l.a.createElement(T, null),
                    l.a.createElement(
                      "div",
                      { className: "quote" },
                      '"It seems to me that the natural world is the greatest source of excitement; the greatest source of visual beauty, the greatest source of intellectual interest. It is the greatest source of so much in life that makes life worth living."',
                      l.a.createElement("br", null),
                      l.a.createElement(
                        "span",
                        null,
                        "- Sir David Attenborough"
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "PS" },
                      l.a.createElement("h1", null, "Monthly Sponsorship"),
                      l.a.createElement(
                        "p",
                        null,
                        "With the monthly sponsorship you can set up a direct debit of the amount of your choice, every month (you can stop direct debit at any time)! Not only will you be providing invaluable care, you will also receive a great gift pack."
                      ),
                      l.a.createElement(
                        "h3",
                        null,
                        "How your money will help :"
                      ),
                      l.a.createElement(
                        "ul",
                        { className: "list" },
                        l.a.createElement(
                          "li",
                          null,
                          "Rescue, care and support the animal of your choice saved from exploitation and captivity"
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          "Provide care for the animal at our sanctuaries (meals, veterinary care, GPS tracking collar...)"
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          "Monitor wild populations to inform conservation efforts"
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          "Run environmental education programmes for local communities and others"
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          "Campaign against exploitation of wildlife and end trophy and canned hunting practices"
                        )
                      ),
                      l.a.createElement("p", null, "and morel..."),
                      l.a.createElement(
                        "h3",
                        null,
                        "Monthly Sponsorship Pack :"
                      ),
                      l.a.createElement(
                        "p",
                        { className: "line" },
                        "To thank you for your sponsorship you will receive :"
                      ),
                      l.a.createElement(
                        "ul",
                        { className: "list" },
                        l.a.createElement(
                          "li",
                          null,
                          "A personalized sponsorship certificate"
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          "A photo of your sponsored animal to print and keep"
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          "A fact sheet about your animal"
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          "A quarterly email including photos and an update on your animal"
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          "An insider report of all our rescue operations and updates on all the animals at our rescue center"
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { className: "link-payment" },
                        l.a.createElement(
                          r.b,
                          {
                            to: "/paymentform/"
                              .concat(this.props.match.params.id, "&")
                              .concat(this.state.typeoffunding),
                            style: { color: "#455" },
                          },
                          "Sponsor now !"
                        )
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(t.Component),
        Wa = (function (e) {
          Object(m.a)(n, e);
          var a = Object(u.a)(n);
          function n() {
            var e;
            Object(c.a)(this, n);
            for (var t = arguments.length, l = new Array(t), o = 0; o < t; o++)
              l[o] = arguments[o];
            return (
              ((e = a.call.apply(a, [this].concat(l))).state = {
                typeoffunding: "adopted",
              }),
              e
            );
          }
          return (
            Object(s.a)(n, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "div",
                    { className: "puncSponsor" },
                    l.a.createElement(T, null),
                    l.a.createElement(
                      "div",
                      { className: "quote" },
                      '"It seems to me that the natural world is the greatest source of excitement; the greatest source of visual beauty, the greatest source of intellectual interest. It is the greatest source of so much in life that makes life worth living."',
                      l.a.createElement("br", null),
                      l.a.createElement(
                        "span",
                        null,
                        "- Sir David Attenborough"
                      )
                    ),
                    l.a.createElement(
                      "div",
                      { className: "PS" },
                      l.a.createElement("h1", null, "1 year adoption"),
                      l.a.createElement(
                        "p",
                        null,
                        "For 900$ adopt an animal for 1 whole year!  Not only will you be providing invaluable care, you will also receive a great gift pack."
                      ),
                      l.a.createElement(
                        "h3",
                        null,
                        "How your money will help :"
                      ),
                      l.a.createElement(
                        "ul",
                        { className: "list" },
                        l.a.createElement(
                          "li",
                          null,
                          "Rescue, care and support the animal of your choice saved from exploitation and captivity"
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          "Provide care for the animal at our sanctuaries (meals, veterinary care, GPS tracking collar...)"
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          "Monitor wild populations to inform conservation efforts"
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          "Run environmental education programmes for local communities and others"
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          "Campaign against exploitation of wildlife and end trophy and canned hunting practices"
                        )
                      ),
                      l.a.createElement("p", null, "and morel..."),
                      l.a.createElement(
                        "h3",
                        null,
                        "Punctual Sponsorship Pack :"
                      ),
                      l.a.createElement(
                        "p",
                        { className: "line" },
                        "To thank you for your sponsorship you will receive :"
                      ),
                      l.a.createElement(
                        "ul",
                        { className: "list" },
                        l.a.createElement(
                          "li",
                          null,
                          "A personalized sponsorship certificate"
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          "A photo of your sponsored animal to print and keep"
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          "A fact sheet about your animal"
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          "A quarterly email including photos and an update on your animal"
                        ),
                        l.a.createElement(
                          "li",
                          null,
                          "An insider report of all our rescue operations and updates on all the animals at our rescue center"
                        ),
                        l.a.createElement("li", null, "A R.O.A.R. tote bag"),
                        l.a.createElement(
                          "li",
                          null,
                          "Your name for life on our adoption board at the sanctuary"
                        )
                      ),
                      l.a.createElement(
                        "div",
                        { className: "link-payment" },
                        l.a.createElement(
                          r.b,
                          {
                            to: "/paymentform/"
                              .concat(this.props.match.params.id, "&")
                              .concat(this.state.typeoffunding),
                            style: { color: "#455" },
                          },
                          "Adopt now !"
                        )
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(t.Component),
        za = (function (e) {
          Object(m.a)(n, e);
          var a = Object(u.a)(n);
          function n(e) {
            return Object(c.a)(this, n), a.call(this, e);
          }
          return (
            Object(s.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  ie.a.init({ duration: 2e3 });
                },
              },
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "div",
                    { className: "App" },
                    l.a.createElement(
                      x.d,
                      null,
                      l.a.createElement(x.b, {
                        exact: !0,
                        path: "/",
                        component: G,
                      }),
                      l.a.createElement(x.b, {
                        exact: !0,
                        path: "/signin",
                        component: V,
                      }),
                      l.a.createElement(x.b, {
                        exact: !0,
                        path: "/signup",
                        component: J,
                      }),
                      l.a.createElement(x.b, {
                        exact: !0,
                        path: "/Animals/:id/edit",
                        component: pe,
                      }),
                      l.a.createElement(x.b, {
                        exact: !0,
                        path: "/Createanimals",
                        component: de,
                      }),
                      l.a.createElement(x.b, {
                        exact: !0,
                        path: "/Manageanimals",
                        component: ge,
                      }),
                      l.a.createElement(X, {
                        exact: !0,
                        path: "/paymentform/:id",
                        component: Ua,
                      }),
                      l.a.createElement(x.b, {
                        exact: !0,
                        path: "/punctualsponsor/:id",
                        component: Ha,
                      }),
                      l.a.createElement(X, {
                        exact: !0,
                        path: "/profile",
                        component: le,
                      }),
                      l.a.createElement(x.b, {
                        exact: !0,
                        path: "/adoption/:id",
                        component: Wa,
                      }),
                      l.a.createElement(x.b, {
                        exact: !0,
                        path: "/monthlysponsor/:id",
                        component: Va,
                      }),
                      l.a.createElement(x.b, {
                        exact: !0,
                        path: "/:id",
                        component: Ee,
                      })
                    )
                  );
                },
              },
            ]),
            n
          );
        })(l.a.Component);
      n(474), n(475), n(476), n(477), n(478), n(479), n(480), n(481);
      i.a.render(
        l.a.createElement(
          r.a,
          null,
          l.a.createElement(R, null, l.a.createElement(za, null))
        ),
        document.getElementById("root")
      );
    },
  },
  [[341, 1, 2]],
]);
//# sourceMappingURL=main.4072d19f.chunk.js.map
