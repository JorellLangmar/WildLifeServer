(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    231: function (e, a, n) {},
    263: function (e, a, n) {},
    268: function (e, a, n) {},
    286: function (e, a, n) {},
    288: function (e, a, n) {},
    340: function (e, a, n) {
      e.exports = n(481);
    },
    473: function (e, a, n) {},
    474: function (e, a, n) {},
    475: function (e, a, n) {},
    476: function (e, a, n) {},
    477: function (e, a, n) {},
    478: function (e, a, n) {},
    479: function (e, a, n) {},
    480: function (e, a, n) {},
    481: function (e, a, n) {
      "use strict";
      n.r(a);
      var t = n(0),
        o = n.n(t),
        i = n(19),
        l = n.n(i),
        r = n(30),
        c = n(25),
        s = n(26),
        m = n(28),
        u = n(27),
        d = n(161),
        p = n.n(d),
        h = p.a.create({
          baseURL: "https://roarroar.heroku.com",
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
        O = o.a.createContext(),
        R = (function (e) {
          Object(m.a)(n, e);
          var a = Object(u.a)(n);
          function n() {
            var e;
            Object(c.a)(this, n);
            for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
              o[i] = arguments[i];
            return (
              ((e = a.call.apply(a, [this].concat(o))).state = {
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
                  return o.a.createElement(
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
        I = n(32),
        x = function (e) {
          return function (a) {
            return o.a.createElement(O.Consumer, null, function (n) {
              return o.a.createElement(e, Object.assign({}, a, { context: n }));
            });
          };
        },
        P = n(169),
        j = n(131),
        T = x(function (e) {
          var a = e.context;
          return o.a.createElement(
            P.a,
            {
              sticky: "top",
              collapseOnSelect: !0,
              expand: "lg",
              variant: "light",
              style: { backgroundColor: "transparent" },
            },
            o.a.createElement(
              P.a.Brand,
              { href: "/" },
              o.a.createElement("img", {
                src:
                  "https://res.cloudinary.com/dxgllmny2/image/upload/v1602864519/roarLogo_vq5loi.png",
                alt: "Logo-Roar",
                className: "roarLogo",
                style: { width: "10vw" },
              })
            ),
            o.a.createElement(P.a.Toggle, {
              "aria-controls": "responsive-navbar-nav",
            }),
            o.a.createElement(
              P.a.Collapse,
              { id: "responsive-navbar-nav" },
              o.a.createElement(j.a, { className: "mr-auto" }),
              o.a.createElement(
                j.a,
                null,
                o.a.createElement(
                  j.a.Link,
                  { eventKey: 4 },
                  a.isAdmin &&
                    o.a.createElement(
                      o.a.Fragment,
                      null,
                      o.a.createElement(
                        "li",
                        null,
                        o.a.createElement(
                          r.c,
                          { to: "/ManageAnimals" },
                          "Manage Animals"
                        )
                      )
                    )
                ),
                o.a.createElement(
                  j.a.Link,
                  { eventKey: 3 },
                  a.isAdmin &&
                    o.a.createElement(
                      o.a.Fragment,
                      null,
                      o.a.createElement(
                        "li",
                        null,
                        o.a.createElement(
                          r.c,
                          { to: "/CreateAnimals" },
                          "Create Animals"
                        )
                      )
                    )
                ),
                o.a.createElement(
                  j.a.Link,
                  null,
                  a.isLoggedIn &&
                    o.a.createElement(
                      o.a.Fragment,
                      null,
                      o.a.createElement(
                        "li",
                        null,
                        o.a.createElement(
                          r.c,
                          { to: "/profile" },
                          a.user && a.user.email
                        )
                      )
                    ),
                  !a.isLoggedIn &&
                    o.a.createElement(
                      o.a.Fragment,
                      null,
                      o.a.createElement(
                        "li",
                        null,
                        o.a.createElement(r.c, { to: "/signin" }, "Log in")
                      )
                    )
                ),
                o.a.createElement(
                  j.a.Link,
                  { eventKey: 2 },
                  !a.isLoggedIn &&
                    o.a.createElement(
                      o.a.Fragment,
                      null,
                      o.a.createElement(
                        "li",
                        null,
                        o.a.createElement(
                          r.c,
                          { to: "/signup" },
                          "Create account"
                        )
                      )
                    ),
                  a.isLoggedIn &&
                    o.a.createElement(
                      o.a.Fragment,
                      null,
                      o.a.createElement(
                        "li",
                        null,
                        o.a.createElement(
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
                  return o.a.createElement(
                    "div",
                    { className: "whatwedo" },
                    o.a.createElement("h1", null, "What we do :"),
                    o.a.createElement(
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
                  return o.a.createElement(
                    "div",
                    { className: "kpis" },
                    o.a.createElement(
                      "div",
                      { className: "wrapper" },
                      o.a.createElement(
                        "div",
                        { class: "kpi" },
                        o.a.createElement("span", { className: "num" }, "247"),
                        o.a.createElement("br", null),
                        "animals have been rescued by R.O.A.R. since its creation."
                      ),
                      o.a.createElement(
                        "div",
                        { class: "kpi" },
                        o.a.createElement("span", { className: "num" }, "44"),
                        o.a.createElement("br", null),
                        "staff members work tirelessly at the Sanctuary all year round."
                      ),
                      o.a.createElement(
                        "div",
                        { class: "kpi" },
                        o.a.createElement("span", { className: "num" }, "36"),
                        o.a.createElement("br", null),
                        "different wildlife species have been taken care of at the Sanctuary."
                      ),
                      o.a.createElement(
                        "div",
                        { class: "kpi" },
                        o.a.createElement(
                          "span",
                          { className: "num" },
                          "37,568"
                        ),
                        o.a.createElement("br", null),
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
        L = n(166),
        F = n(570),
        B =
          (n(263),
          (function (e) {
            Object(m.a)(n, e);
            var a = Object(u.a)(n);
            function n() {
              var e;
              Object(c.a)(this, n);
              for (
                var t = arguments.length, o = new Array(t), i = 0;
                i < t;
                i++
              )
                o[i] = arguments[i];
              return (
                ((e = a.call.apply(a, [this].concat(o))).state = {
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
                    var o = Object(L.a)(e.state.animalcheck);
                    return (
                      o.push(t),
                      e.setState({ animalcheck: o }),
                      S("".concat(o))
                        .then(function (a) {
                          e.setState({ animals: a });
                        })
                        .catch(function (e) {
                          console.log(e);
                        }),
                      o
                    );
                  }
                  var i = e.state.animalcheck.filter(function (e) {
                    return e !== t;
                  });
                  0 === i.length && (i = e.state.species),
                    console.log(i),
                    console.log(i.length),
                    e.setState({ animalcheck: i }),
                    S("".concat(i))
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
                    return o.a.createElement(
                      "div",
                      { className: "Filter-Animals" },
                      o.a.createElement(
                        "div",
                        {
                          style: {
                            padding: "1vw 3vw",
                            backgroundColor: "#455",
                            margin: "3% 0%",
                          },
                        },
                        o.a.createElement(
                          "ul",
                          {
                            class: "nav nav-pills nav-fill",
                            "data-toggle": "pill",
                          },
                          this.state.species.map(function (a, n) {
                            return o.a.createElement(
                              "li",
                              {
                                class: "nav-item",
                                "data-toggle": "pill",
                                style: { color: "white" },
                              },
                              o.a.createElement(F.a, {
                                value: a,
                                onChange: e.handleCheck,
                              }),
                              " ",
                              a
                            );
                          })
                        )
                      ),
                      o.a.createElement(
                        "div",
                        { className: "animalGrid" },
                        this.state.animals.map(function (e) {
                          return o.a.createElement(
                            "div",
                            { className: "animalCards" },
                            o.a.createElement("img", {
                              src: e.profileImage,
                              alt: "Animal Portrait",
                              className: "animalPhoto",
                            }),
                            o.a.createElement(
                              "h2",
                              { className: "animalName" },
                              e.name
                            ),
                            o.a.createElement(
                              "div",
                              { class: "overlay" },
                              o.a.createElement(
                                "div",
                                { class: "text-overlay" },
                                o.a.createElement(
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
          })(o.a.Component)),
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
                  return o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      "div",
                      { className: "home" },
                      o.a.createElement(T, null),
                      o.a.createElement(
                        "div",
                        { "data-aos": "fade-up" },
                        o.a.createElement("h1", null, "R.O.A.R."),
                        o.a.createElement("h2", null, "Reach Out And Rescue")
                      )
                    ),
                    o.a.createElement(
                      "div",
                      { "data-aos": "fade-up" },
                      o.a.createElement(D, null)
                    ),
                    o.a.createElement(
                      "div",
                      { "data-aos": "fade-up" },
                      o.a.createElement(M, null)
                    ),
                    o.a.createElement(
                      "div",
                      { "data-aos": "fade-up" },
                      o.a.createElement(B, null)
                    )
                  );
                },
              },
            ]),
            n
          );
        })(o.a.Component),
        K = n(72),
        U =
          (n(231),
          (function (e) {
            Object(m.a)(n, e);
            var a = Object(u.a)(n);
            function n() {
              var e;
              Object(c.a)(this, n);
              for (
                var t = arguments.length, o = new Array(t), i = 0;
                i < t;
                i++
              )
                o[i] = arguments[i];
              return (
                ((e = a.call.apply(a, [this].concat(o))).state = {
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
                    return o.a.createElement(
                      "form",
                      {
                        onChange: this.handleChange,
                        onSubmit: this.handleSubmit,
                        className: "signinForm",
                      },
                      o.a.createElement(
                        "label",
                        { htmlFor: "email", className: "formSI" },
                        "Email"
                      ),
                      o.a.createElement("input", {
                        type: "email",
                        id: "email",
                        name: "email",
                        className: "formSI2",
                      }),
                      o.a.createElement(
                        "label",
                        { htmlFor: "password", className: "formSI" },
                        "Password"
                      ),
                      o.a.createElement("input", {
                        type: "password",
                        id: "password",
                        name: "password",
                        className: "formSI2",
                      }),
                      o.a.createElement(
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
      var H = Object(I.g)(U),
        V = function (e) {
          return o.a.createElement(
            "div",
            { className: "signinPage" },
            o.a.createElement(T, null),
            o.a.createElement(H, null)
          );
        },
        W = n(553),
        z = n(559),
        Y = n(243),
        $ = n(561),
        Z =
          (n(268),
          (function (e) {
            Object(m.a)(n, e);
            var a = Object(u.a)(n);
            function n() {
              var e;
              Object(c.a)(this, n);
              for (
                var t = arguments.length, o = new Array(t), i = 0;
                i < t;
                i++
              )
                o[i] = arguments[i];
              return (
                ((e = a.call.apply(a, [this].concat(o))).state = {
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
                    return o.a.createElement(
                      o.a.Fragment,
                      null,
                      o.a.createElement(
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
                        o.a.createElement(
                          W.a.Item,
                          { label: "", style: { fontSize: "150%" } },
                          "First Name",
                          o.a.createElement(z.a, { name: "firstname" })
                        ),
                        o.a.createElement(
                          W.a.Item,
                          { label: "", style: { fontSize: "150%" } },
                          "Last Name",
                          o.a.createElement(z.a, { name: "lastname" })
                        ),
                        o.a.createElement(
                          W.a.Item,
                          {
                            label: "",
                            style: { fontSize: "150%" },
                            rules: [{ type: "email" }],
                          },
                          "Email",
                          o.a.createElement(z.a, { name: "email" })
                        ),
                        o.a.createElement(
                          W.a.Item,
                          {
                            label: "",
                            style: { fontSize: "150%" },
                            rules: [{ type: "password" }],
                          },
                          "Password",
                          o.a.createElement(z.a, {
                            name: "password",
                            prefix: o.a.createElement($.a, {
                              className: "site-form-item-icon",
                            }),
                            type: "password",
                            placeholder: "Password",
                          })
                        ),
                        o.a.createElement(
                          W.a.Item,
                          { label: "" },
                          o.a.createElement(
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
          })(o.a.Component));
      Z.contextType = O;
      var q = Object(I.g)(Z),
        J = function (e) {
          return o.a.createElement(
            "div",
            { className: "signupPage" },
            o.a.createElement(T, null),
            o.a.createElement(q, null)
          );
        },
        Q = n(219),
        X = x(function (e) {
          var a = e.component,
            n = e.context,
            t = Object(Q.a)(e, ["component", "context"]);
          return n.isLoading
            ? null
            : n.isLoggedIn
            ? o.a.createElement(
                I.b,
                Object.assign({}, t, {
                  render: function (e) {
                    return o.a.createElement(a, e);
                  },
                })
              )
            : o.a.createElement(I.a, { to: "/signin" });
        }),
        ee = (n(286), n(558)),
        ae = n(555),
        ne = n(567),
        te = (function (e) {
          Object(m.a)(n, e);
          var a = Object(u.a)(n);
          function n() {
            var e;
            Object(c.a)(this, n);
            for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
              o[i] = arguments[i];
            return (
              ((e = a.call.apply(a, [this].concat(o))).state = {
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
                  return o.a.createElement(
                    "div",
                    { className: "profilePage" },
                    o.a.createElement(T, null),
                    o.a.createElement(
                      ee.a.Group,
                      { style: { margin: "5vh 5vw" } },
                      o.a.createElement(
                        ee.a,
                        null,
                        o.a.createElement(ee.a.Image, {
                          size: "small",
                          src:
                            "https://res.cloudinary.com/dxgllmny2/image/upload/v1603200377/clipart1717870_dcec3q.png",
                          alt: "",
                        }),
                        o.a.createElement(
                          ee.a.Content,
                          null,
                          o.a.createElement(
                            ee.a.Header,
                            { as: "a", style: { fontSize: "250%" } },
                            this.context.user.firstname,
                            " ",
                            this.context.user.lastname
                          ),
                          o.a.createElement(
                            ee.a.Description,
                            { style: { fontSize: "150%" } },
                            o.a.createElement(
                              "p",
                              null,
                              this.context.user.email
                            ),
                            o.a.createElement(
                              "p",
                              null,
                              this.context.user.adress
                            ),
                            o.a.createElement(
                              "p",
                              null,
                              this.context.user.phone
                            )
                          )
                        )
                      )
                    ),
                    o.a.createElement(
                      "div",
                      null,
                      o.a.createElement(
                        ae.a,
                        {
                          pointing: !0,
                          color: "blue",
                          style: {
                            margin: "5vh 5vw",
                            background: "transparent",
                          },
                        },
                        o.a.createElement(ae.a.Item, {
                          name: "Favorites",
                          active: "Favorites" === this.state.activeItem,
                          onClick: this.handleItemClick,
                        }),
                        o.a.createElement(ae.a.Item, {
                          name: "Adopted",
                          active: "Adopted" === this.state.activeItem,
                          onClick: this.handleItemClick,
                        }),
                        o.a.createElement(ae.a.Item, {
                          name: "Sponsored",
                          active: "Sponsored" === this.state.activeItem,
                          onClick: this.handleItemClick,
                        })
                      ),
                      o.a.createElement(
                        ne.a,
                        {
                          style: {
                            margin: "0vh 5vw",
                            background: "transparent",
                          },
                        },
                        o.a.createElement(
                          "div",
                          { className: "animalGridProfile" },
                          this.state.favoriteDisplay.map(function (e, a) {
                            return o.a.createElement(
                              "div",
                              { key: a, className: "animalCardsProfile" },
                              o.a.createElement("img", {
                                src: e.profileImage,
                                alt: "Animal Portrait",
                                className: "animalPhotoProfile",
                              }),
                              o.a.createElement(
                                "h2",
                                { className: "animalNameProfile" },
                                e.name
                              ),
                              o.a.createElement(
                                "div",
                                { className: "overlayProfile" },
                                o.a.createElement(
                                  "div",
                                  { className: "text-overlayProfile" },
                                  o.a.createElement(
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
        })(o.a.Component);
      te.contextType = O;
      var oe = x(te),
        ie = n(306),
        le = n.n(ie),
        re = (n(469), n(470), n(471), n(472), n(552)),
        ce = n(563),
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
            for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
              o[i] = arguments[i];
            return (
              ((e = a.call.apply(a, [this].concat(o))).state = {
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
                  var o = new FormData();
                  for (var i in e.state) o.append(i, e.state[i]);
                  _(o)
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
                  return o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      re.a,
                      { style: { padding: "15%" } },
                      o.a.createElement(
                        re.a.Group,
                        { widths: "equal" },
                        o.a.createElement(re.a.Input, {
                          fluid: !0,
                          label: "Name",
                          placeholder: "Name",
                          name: "name",
                          onChange: this.handleChange,
                          value: this.state.name,
                        }),
                        o.a.createElement(re.a.Input, {
                          fluid: !0,
                          label: "Age",
                          placeholder: "Age",
                          name: "age",
                          onChange: this.handleChange,
                          value: this.state.age,
                        }),
                        o.a.createElement(re.a.Input, {
                          fluid: !0,
                          label: "Specie",
                          placeholder: "Specie",
                          name: "specie",
                          onChange: this.handleChange,
                          value: this.state.specie,
                        }),
                        o.a.createElement(re.a.Select, {
                          fluid: !0,
                          label: "Gender",
                          options: se,
                          placeholder: "Gender",
                          name: "gender",
                          onChange: this.handleSelectChange,
                          value: this.state.gender,
                        })
                      ),
                      o.a.createElement(
                        re.a.Group,
                        { inline: !0 },
                        o.a.createElement("label", null, "Conservation Status"),
                        o.a.createElement(re.a.Radio, {
                          label: "Critical",
                          value: "Critical",
                          checked: "Critical" === this.state.ConservationStatus,
                          name: "ConservationStatus",
                          onChange: this.handleRadioChange,
                        }),
                        o.a.createElement(re.a.Radio, {
                          label: "Vulnerable",
                          value: "Vulnerable",
                          checked:
                            "Vulnerable" === this.state.ConservationStatus,
                          name: "ConservationStatus",
                          onChange: this.handleRadioChange,
                        }),
                        o.a.createElement(re.a.Radio, {
                          label: "Least Concerned",
                          value: "Least Concerned",
                          checked:
                            "Least Concerned" === this.state.ConservationStatus,
                          name: "ConservationStatus",
                          onChange: this.handleRadioChange,
                        }),
                        o.a.createElement(re.a.Radio, {
                          label: "Near Threatened",
                          value: "Near Threatened",
                          checked:
                            "Near Threatened" === this.state.ConservationStatus,
                          name: "ConservationStatus",
                          onChange: this.handleRadioChange,
                        }),
                        o.a.createElement(re.a.Radio, {
                          label: "Data Deficient",
                          value: "Data Deficient",
                          checked:
                            "Data Deficient" === this.state.ConservationStatus,
                          name: "ConservationStatus",
                          onChange: this.handleRadioChange,
                        }),
                        o.a.createElement(re.a.Radio, {
                          label: "Endangered",
                          value: "Endangered",
                          checked:
                            "Endangered" === this.state.ConservationStatus,
                          name: "ConservationStatus",
                          onChange: this.handleRadioChange,
                        })
                      ),
                      o.a.createElement(re.a.TextArea, {
                        label: "Description",
                        placeholder: "Tell us more about our new companion...",
                        onChange: this.handleChange,
                        name: "description",
                        value: this.state.description,
                      }),
                      o.a.createElement(
                        ce.a,
                        { as: "label", htmlFor: "file", type: "button" },
                        "Upload a cute face"
                      ),
                      o.a.createElement(re.a.Input, {
                        type: "file",
                        id: "file",
                        style: { visibility: "hidden" },
                        onChange: this.handleChange,
                        name: "profileImage",
                      }),
                      o.a.createElement(
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
        ue = Object(I.g)(me),
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
                  return o.a.createElement(
                    "div",
                    { className: "createanimals" },
                    o.a.createElement(T, null),
                    o.a.createElement("div", null, o.a.createElement(ue, null))
                  );
                },
              },
            ]),
            n
          );
        })(o.a.Component),
        pe = function (e) {
          return o.a.createElement(
            "div",
            { className: "createanimals" },
            o.a.createElement(T, null),
            o.a.createElement(
              "div",
              null,
              o.a.createElement(ue, { action: "edit", id: e.match.params.id })
            )
          );
        },
        he = n(560),
        be = n(158),
        ge = (function (e) {
          Object(m.a)(n, e);
          var a = Object(u.a)(n);
          function n() {
            var e;
            Object(c.a)(this, n);
            for (var t = arguments.length, o = new Array(t), i = 0; i < t; i++)
              o[i] = arguments[i];
            return (
              ((e = a.call.apply(a, [this].concat(o))).state = { animals: [] }),
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
                  return o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(T, null),
                    o.a.createElement(
                      "div",
                      { className: "table-manage" },
                      o.a.createElement(
                        "div",
                        null,
                        o.a.createElement(
                          he.a,
                          { celled: !0, compact: !0, definition: !0 },
                          o.a.createElement(
                            he.a.Header,
                            { fullWidth: !0 },
                            o.a.createElement(
                              he.a.Row,
                              null,
                              o.a.createElement(he.a.HeaderCell, null),
                              o.a.createElement(
                                he.a.HeaderCell,
                                null,
                                "Profile Image"
                              ),
                              o.a.createElement(he.a.HeaderCell, null, "Name"),
                              o.a.createElement(
                                he.a.HeaderCell,
                                null,
                                "Description"
                              ),
                              o.a.createElement(he.a.HeaderCell, null, "Edit")
                            )
                          ),
                          o.a.createElement(
                            he.a.Body,
                            null,
                            this.state.animals.map(function (a, n) {
                              return o.a.createElement(
                                he.a.Row,
                                { key: n },
                                o.a.createElement(
                                  he.a.Cell,
                                  { collapsing: !0 },
                                  o.a.createElement(be.a, {
                                    onClick: function () {
                                      return e.deleteAnimal(a._id);
                                    },
                                    name: "trash alternate",
                                  })
                                ),
                                o.a.createElement(
                                  he.a.Cell,
                                  { style: { width: "20%" } },
                                  " ",
                                  o.a.createElement("img", {
                                    style: {
                                      width: "100%",
                                      borderRadius: "10px",
                                    },
                                    src: a.profileImage,
                                    alt: "animal",
                                  })
                                ),
                                o.a.createElement(he.a.Cell, null, a.name),
                                o.a.createElement(
                                  he.a.Cell,
                                  null,
                                  a.description
                                ),
                                o.a.createElement(
                                  he.a.Cell,
                                  null,
                                  " ",
                                  o.a.createElement(
                                    r.b,
                                    { to: "/Animals/".concat(a._id, "/edit") },
                                    o.a.createElement(be.a, { name: "edit" })
                                  )
                                )
                              );
                            })
                          ),
                          o.a.createElement(
                            he.a.Footer,
                            { fullWidth: !0 },
                            o.a.createElement(
                              he.a.Row,
                              null,
                              o.a.createElement(he.a.HeaderCell, null),
                              o.a.createElement(
                                he.a.HeaderCell,
                                { colSpan: "4" },
                                o.a.createElement(
                                  ce.a,
                                  {
                                    floated: "right",
                                    icon: !0,
                                    labelPosition: "left",
                                    primary: !0,
                                    size: "small",
                                  },
                                  o.a.createElement(be.a, { name: "user" }),
                                  " ",
                                  o.a.createElement(
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
        ye = n(568),
        fe =
          (n(288),
          (function (e) {
            Object(m.a)(n, e);
            var a = Object(u.a)(n);
            function n() {
              var e;
              Object(c.a)(this, n);
              for (
                var t = arguments.length, o = new Array(t), i = 0;
                i < t;
                i++
              )
                o[i] = arguments[i];
              return (
                ((e = a.call.apply(a, [this].concat(o))).state = {
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
                    return o.a.createElement(
                      "div",
                      null,
                      o.a.createElement(
                        "div",
                        { className: "animalDetails" },
                        o.a.createElement(
                          ye.a,
                          null,
                          o.a.createElement(
                            ye.a.Column,
                            { width: 4 },
                            o.a.createElement("img", {
                              src: this.state.animal.profileImage,
                              alt: "Animal Portrait",
                              className: "animalPortrait",
                            })
                          ),
                          o.a.createElement(
                            ye.a.Column,
                            { width: 9 },
                            o.a.createElement(
                              "div",
                              { className: "mid-part" },
                              o.a.createElement(
                                "h2",
                                { className: "name" },
                                this.state.animal.name
                              ),
                              o.a.createElement(
                                "div",
                                { className: "ani-id" },
                                o.a.createElement(
                                  "div",
                                  { className: "specie" },
                                  o.a.createElement(
                                    "p",
                                    null,
                                    o.a.createElement(
                                      "span",
                                      { className: "bold" },
                                      "Specie :"
                                    )
                                  ),
                                  o.a.createElement(
                                    "p",
                                    null,
                                    this.state.animal.specie
                                  )
                                )
                              ),
                              o.a.createElement(
                                "div",
                                { className: "ani-id desc" },
                                o.a.createElement(
                                  "p",
                                  null,
                                  o.a.createElement(
                                    "span",
                                    { className: "bold" },
                                    "About :"
                                  )
                                ),
                                o.a.createElement(
                                  "p",
                                  null,
                                  this.state.animal.description
                                )
                              )
                            )
                          ),
                          o.a.createElement(
                            ye.a.Column,
                            { width: 3 },
                            this.context.isLoggedIn &&
                              o.a.createElement(be.a, {
                                style: { cursor: "pointer" },
                                name: "heart",
                                className: "iconHeart",
                                color: this.state.color,
                                onClick: function () {
                                  return e.handleFavorite();
                                },
                              }),
                            o.a.createElement(
                              "div",
                              { className: "ani-id" },
                              o.a.createElement(
                                "p",
                                null,
                                o.a.createElement(
                                  "span",
                                  { className: "bold" },
                                  "Age :"
                                )
                              ),
                              o.a.createElement(
                                "p",
                                null,
                                this.state.animal.age
                              )
                            ),
                            o.a.createElement(
                              "div",
                              { className: "ani-id" },
                              o.a.createElement(
                                "p",
                                null,
                                o.a.createElement(
                                  "span",
                                  { className: "bold" },
                                  "Gender :"
                                )
                              ),
                              o.a.createElement(
                                "p",
                                null,
                                this.state.animal.gender
                              )
                            ),
                            o.a.createElement(
                              "div",
                              { className: "ani-id" },
                              o.a.createElement(
                                "p",
                                null,
                                o.a.createElement(
                                  "span",
                                  { className: "bold" },
                                  "Conservation Status :"
                                )
                              ),
                              o.a.createElement(
                                "p",
                                null,
                                this.state.animal.ConservationStatus
                              )
                            )
                          )
                        )
                      ),
                      o.a.createElement(
                        "div",
                        { className: "sponsorship" },
                        o.a.createElement(
                          "div",
                          { className: "why-sponsor" },
                          o.a.createElement(
                            "h1",
                            { className: "why" },
                            "Sponsor ",
                            this.state.animal.name,
                            " now !"
                          ),
                          o.a.createElement(
                            "h2",
                            { className: "why2" },
                            "Why sponsor an animal?"
                          ),
                          o.a.createElement(
                            "p",
                            { className: "text-sponsor" },
                            "Today, R.O.A.R. needs your support so it can take things even further: now you can sponsor the animal of your choice and help to protect an endangered species! Thanks to your donation, you\u2019ll be contributing to the well-being of the animals at the Sanctuary (veterinary equipment or enclosures, animal food, environmental enrichment programmes, various expenses) or the protection of endangered species in their native habitats (on-site conservation programmes)."
                          )
                        ),
                        o.a.createElement(
                          "div",
                          { className: "grid" },
                          o.a.createElement(
                            ye.a,
                            null,
                            o.a.createElement(
                              ye.a.Column,
                              { width: 4 },
                              o.a.createElement(
                                "div",
                                { className: "sponsor" },
                                o.a.createElement(
                                  r.b,
                                  {
                                    to: "/ponctualsponsor",
                                    style: { color: "white" },
                                  },
                                  "Punctual",
                                  o.a.createElement("br", null),
                                  " Sponsorship"
                                )
                              )
                            ),
                            o.a.createElement(
                              ye.a.Column,
                              { width: 4 },
                              o.a.createElement(
                                "div",
                                { className: "sponsor" },
                                o.a.createElement(
                                  r.b,
                                  {
                                    to: "/paymentform",
                                    style: { color: "white" },
                                  },
                                  "Monthly",
                                  o.a.createElement("br", null),
                                  " Sponsorship"
                                )
                              )
                            ),
                            o.a.createElement(
                              ye.a.Column,
                              { width: 4 },
                              o.a.createElement(
                                "div",
                                { className: "sponsor" },
                                o.a.createElement(
                                  r.b,
                                  { to: "/#", style: { color: "white" } },
                                  "1 year",
                                  o.a.createElement("br", null),
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
          })(o.a.Component));
      fe.contextType = O;
      var ve = x(fe),
        Ee = function (e) {
          return o.a.createElement(
            "div",
            { className: "animalTarget" },
            o.a.createElement(T, null),
            o.a.createElement(ve, { id: e.match.params.id })
          );
        },
        _e = (function (e) {
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
                  return o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(T, null)
                  );
                },
              },
            ]),
            n
          );
        })(t.Component),
        we = n(224),
        Ce = {
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
        Se = function (e, a) {
          switch (a.type) {
            case "editFormValue":
              return (
                (e.formValues[a.key.toLowerCase()] = a.value),
                Object(we.a)({}, e)
              );
            case "emptyFormValue":
              return Object(we.a)(
                Object(we.a)({}, e),
                {},
                { formValues: Ce.formValues }
              );
          }
          return e;
        },
        ke = Object(t.createContext)(),
        Ne = function (e) {
          var a = e.children;
          return o.a.createElement(
            ke.Provider,
            { value: Object(t.useReducer)(Se, Ce) },
            a
          );
        },
        Ae = function () {
          return Object(t.useContext)(ke);
        },
        Oe = n(551),
        Re = n(310),
        Ie = n(571),
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
      xe = Object(Re.a)(xe);
      var Pe = (xe = Object(Ie.a)(xe)),
        je = n(528),
        Te = n(530),
        De = n(531),
        Me = n(244),
        Le = n(526),
        Fe = Object(Le.a)(function (e) {
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
        Be = function (e) {
          var a = e.title,
            n = (e.logoLink, Fe());
          return o.a.createElement(
            je.a,
            {
              position: "static",
              elevation: 0,
              color: "default",
              className: n.topAppBar,
            },
            o.a.createElement(
              Te.a,
              { className: n.toolbar },
              void 0 !== a &&
                o.a.createElement(
                  De.a,
                  {
                    container: !0,
                    item: !0,
                    direction: "row",
                    alignItems: "center",
                    xs: 12,
                    sm: 6,
                  },
                  o.a.createElement(
                    De.a,
                    { item: !0 },
                    o.a.createElement("img", {
                      src:
                        "https://res.cloudinary.com/dxgllmny2/image/upload/v1603271133/LionIcon_dqetpr.png",
                      alt: "logo",
                      height: "70px",
                      style: { width: "10vw", marginRight:"5%" }
                    })
                  ),
                  o.a.createElement(
                    De.a,
                    { item: !0 },
                    o.a.createElement(
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
        Ge = n(73),
        Ke = n.n(Ge),
        Ue = n(125),
        He = n(39),
        Ve = n(556),
        We = n(542),
        ze = n(317),
        Ye = n(536),
        $e = n(537),
        Ze = n(565),
        qe = n(540),
        Je = n(541),
        Qe = n(538),
        Xe = n(539),
        ea = n(2),
        aa = n(532),
        na = n(533),
        ta = n(534),
        oa = Object(Le.a)(function (e) {
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
        ia = function (e) {
          var a,
            n = oa(),
            t = e.active,
            i = e.completed,
            l = {
              1: o.a.createElement(aa.a, null),
              2: o.a.createElement(na.a, null),
              3: o.a.createElement(ta.a, null),
              4: o.a.createElement(ta.a, null),
            };
          return o.a.createElement(
            "div",
            {
              className: Object(ea.a)(
                n.root,
                ((a = {}),
                Object(K.a)(a, n.active, t),
                Object(K.a)(a, n.completed, i),
                a)
              ),
            },
            l[String(e.icon)]
          );
        },
        la = n(554),
        ra = n(557),
        ca = function () {
          var e = Ae(),
            a = Object(He.a)(e, 2),
            n = a[0].formValues,
            t = a[1];
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              De.a,
              { item: !0, xs: 12 },
              o.a.createElement(Me.a, { variant: "h6" }, "Contact information")
            ),
            o.a.createElement(
              De.a,
              { item: !0, xs: 12, sm: 4 },
              o.a.createElement(la.a, {
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
            o.a.createElement(
              De.a,
              { item: !0, xs: 12, sm: 4 },
              o.a.createElement(la.a, {
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
            o.a.createElement(
              De.a,
              { item: !0, xs: 12, sm: 4 },
              o.a.createElement(la.a, {
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
            o.a.createElement(
              De.a,
              { item: !0, xs: 12, sm: 6 },
              o.a.createElement(la.a, {
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
            o.a.createElement(
              De.a,
              { item: !0, xs: 12, sm: 6 },
              o.a.createElement(la.a, {
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
            o.a.createElement(
              De.a,
              { item: !0, xs: 12, sm: 4 },
              o.a.createElement(la.a, {
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
            o.a.createElement(
              De.a,
              { item: !0, xs: 12, sm: 4 },
              o.a.createElement(la.a, {
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
            o.a.createElement(
              De.a,
              { item: !0, xs: 12, sm: 4 },
              o.a.createElement(ra.a, {
                options: sa,
                getOptionLabel: function (e) {
                  return e.name;
                },
                renderInput: function (e) {
                  return o.a.createElement(
                    la.a,
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
        sa = [
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
        ma = n(87),
        ua = function (e) {
          var a = e.component,
            n = e.inputRef,
            i = Object(Q.a)(e, ["component", "inputRef"]),
            l = Object(t.useRef)();
          return (
            Object(t.useImperativeHandle)(n, function () {
              return {
                focus: function () {
                  return l.current.focus;
                },
              };
            }),
            o.a.createElement(
              a,
              Object.assign(
                {
                  onReady: function (e) {
                    return (l.current = e);
                  },
                },
                i
              )
            )
          );
        },
        da = function () {
          var e = Ae(),
            a = Object(He.a)(e, 2),
            n = a[0].formValues,
            t = a[1];
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              De.a,
              { container: !0, item: !0, xs: 12 },
              o.a.createElement(
                De.a,
                { item: !0, xs: 12, sm: 3 },
                o.a.createElement(Me.a, { variant: "h6" }, "Payment Data")
              ),
              o.a.createElement(
                De.a,
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
                  return o.a.createElement("img", {
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
            o.a.createElement(
              De.a,
              { item: !0, xs: 6, sm: 3 },
              o.a.createElement(ra.a, {
                options: pa,
                getOptionLabel: function (e) {
                  return e.code;
                },
                renderOption: function (e) {
                  return o.a.createElement(
                    o.a.Fragment,
                    null,
                    e.name,
                    " (",
                    e.code,
                    ")"
                  );
                },
                renderInput: function (e) {
                  return o.a.createElement(
                    la.a,
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
            o.a.createElement(
              De.a,
              { item: !0, xs: 6, sm: 3 },
              o.a.createElement(la.a, {
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
            o.a.createElement(
              De.a,
              { item: !0, xs: 12, sm: 6 },
              o.a.createElement(la.a, {
                label: "Credit Card Number",
                name: "ccnumber",
                variant: "outlined",
                required: !0,
                fullWidth: !0,
                InputProps: {
                  inputComponent: ua,
                  inputProps: { component: ma.CardNumberElement },
                },
                InputLabelProps: { shrink: !0 },
              })
            ),
            o.a.createElement(
              De.a,
              { item: !0, xs: 6, sm: 6 },
              o.a.createElement(la.a, {
                label: "Expiration Date",
                name: "ccexp",
                variant: "outlined",
                required: !0,
                fullWidth: !0,
                InputProps: {
                  inputProps: { component: ma.CardExpiryElement },
                  inputComponent: ua,
                },
                InputLabelProps: { shrink: !0 },
              })
            ),
            o.a.createElement(
              De.a,
              { item: !0, xs: 6, sm: 6 },
              o.a.createElement(la.a, {
                label: "CVC",
                name: "cvc",
                variant: "outlined",
                required: !0,
                fullWidth: !0,
                InputProps: {
                  inputProps: { component: ma.CardCvcElement },
                  inputComponent: ua,
                },
                InputLabelProps: { shrink: !0 },
              })
            )
          );
        },
        pa = [
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
        ha = function () {
          var e = Ae(),
            a = Object(He.a)(e, 2),
            n = a[0].formValues,
            t = a[1];
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              De.a,
              { item: !0, xs: 12 },
              o.a.createElement(Me.a, { variant: "h6" }, "Additional data")
            ),
            o.a.createElement(
              De.a,
              { item: !0, xs: 12, sm: 6 },
              o.a.createElement(la.a, {
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
            o.a.createElement(
              De.a,
              { item: !0, xs: 12, sm: 6 },
              o.a.createElement(la.a, {
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
            o.a.createElement(
              De.a,
              { item: !0, xs: 12 },
              o.a.createElement(Me.a, { variant: "h6" }, "Social Network?")
            ),
            o.a.createElement(
              De.a,
              { item: !0, xs: 12, sm: 6 },
              o.a.createElement(la.a, {
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
            o.a.createElement(
              De.a,
              { item: !0, xs: 12, sm: 6 },
              o.a.createElement(la.a, {
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
        ba = n(9),
        ga = n(483),
        ya = Object(ba.a)(function (e) {
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
        })(ga.a),
        fa = "localhost" === window.location.hostname,
        va = fa ? "http://localhost/" : window.location.hostname,
        Ea = function () {
          var e = va + "/publishableKeyGet.php";
          return new Promise(
            (function () {
              var a = Object(Ue.a)(
                Ke.a.mark(function a(n) {
                  var t, o;
                  return Ke.a.wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          if (!fa) {
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
                          (t = a.t0), (o = t.data.publishableKey), n(o);
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
        _a = function (e) {
          var a = va + "capture.php";
          return new Promise(
            (function () {
              var n = Object(Ue.a)(
                Ke.a.mark(function n(t) {
                  var o, i;
                  return Ke.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.next = 2), p.a.post(a, e);
                        case 2:
                          (o = n.sent), (i = o.data.clientSecret), t(i);
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
        wa = function (e) {
          var a = e.staff,
            n = e.arrivaldate,
            t = e.service,
            o = e.fsm,
            i = e.email,
            l = e.currency;
          return {
            amount: 100 * e.amount,
            currency: l.code,
            cardType: "card",
            receipt_email: i,
            metadata: { staff: a, arrivaldate: n, service: t, fsm: o },
          };
        },
        Ca = function (e, a) {
          var n = e.firstname,
            t = e.lastname,
            o = e.email,
            i = e.line1,
            l = e.line2,
            r = e.postal_code;
          return {
            payment_method: {
              card: a,
              billing_details: {
                address: {
                  city: e.city,
                  country: e.country.code,
                  line1: i,
                  line2: l,
                  postal_code: r,
                  state: null,
                },
                email: o,
                name: "".concat(n, " ").concat(t),
                phone: null,
              },
            },
          };
        },
        Sa = Object(Le.a)(function (e) {
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
        ka = function (e) {
          switch (e.step) {
            case 0:
              return o.a.createElement(ca, null);
            case 1:
              return o.a.createElement(ha, null);
            case 2:
              return o.a.createElement(da, null);
            default:
              return o.a.createElement(o.a.Fragment, null);
          }
        },
        Na = function () {
          var e = Sa(),
            a = Object(t.useState)(0),
            n = Object(He.a)(a, 2),
            i = n[0],
            l = n[1],
            r = Object(t.useState)(!1),
            c = Object(He.a)(r, 2),
            s = c[0],
            m = c[1],
            u = Object(t.useState)(!0),
            d = Object(He.a)(u, 2),
            p = d[0],
            h = d[1],
            b = Object(t.useState)(""),
            g = Object(He.a)(b, 2),
            y = g[0],
            f = g[1],
            v = Object(ma.useStripe)(),
            E = Object(ma.useElements)(),
            _ = Ae(),
            w = Object(He.a)(_, 2),
            C = w[0].formValues,
            S = w[1],
            k = function () {
              return l(function (e) {
                return e - 1;
              });
            },
            N = (function () {
              var e = Object(Ue.a)(
                Ke.a.mark(function e() {
                  var a, n, t, o, i, r, c;
                  return Ke.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return m(!0), (a = wa(C)), (e.next = 4), _a(a);
                        case 4:
                          return (
                            (n = e.sent),
                            (t = E.getElement(ma.CardCvcElement)),
                            (o = Ca(C, t)),
                            (e.next = 9),
                            v.confirmCardPayment(n, o)
                          );
                        case 9:
                          (i = e.sent),
                            (r = i.paymentIntent),
                            (c = i.error)
                              ? (h(!1), f(c.message))
                              : r &&
                                "succeeded" === r.status &&
                                (h(!0), f(""), S({ type: "emptyFormValue" })),
                            l(function (e) {
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
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              Ye.a,
              {
                alternativeLabel: !0,
                className: e.stepper,
                connector: o.a.createElement(ya, null),
                activeStep: i,
              },
              [1, 2, 3].map(function (e) {
                return o.a.createElement(
                  $e.a,
                  { key: e },
                  o.a.createElement(Ze.a, { StepIconComponent: ia })
                );
              })
            ),
            o.a.createElement(
              Ve.a,
              { className: e.mainBox },
              3 === i
                ? o.a.createElement(
                    De.a,
                    {
                      container: !0,
                      spacing: 3,
                      direction: "column",
                      justify: "space-around",
                      alignItems: "center",
                      style: { height: "400px" },
                    },
                    p
                      ? o.a.createElement(Qe.a, {
                          fontSize: "large",
                          color: "primary",
                        })
                      : o.a.createElement(Xe.a, {
                          fontSize: "large",
                          color: "error",
                        }),
                    o.a.createElement(Me.a, { variant: "h4" }, y),
                    o.a.createElement(
                      qe.a,
                      {
                        onClick: p
                          ? function () {
                              return l(0);
                            }
                          : k,
                        className: e.button,
                      },
                      p ? "Reset" : "Back"
                    )
                  )
                : o.a.createElement(
                    "form",
                    {
                      autoComplete: "off",
                      className: e.form,
                      onSubmit: function (e) {
                        e.preventDefault(),
                          2 === i
                            ? N()
                            : l(function (e) {
                                return e + 1;
                              });
                      },
                    },
                    o.a.createElement(
                      De.a,
                      { container: !0, spacing: 3 },
                      o.a.createElement(ka, { step: i }),
                      o.a.createElement(
                        De.a,
                        { container: !0, item: !0, justify: "flex-end" },
                        o.a.createElement(
                          qe.a,
                          {
                            disabled: 0 === i,
                            className: e.button,
                            onClick: k,
                          },
                          "Back"
                        ),
                        o.a.createElement(
                          qe.a,
                          {
                            variant: "contained",
                            color: "primary",
                            className: e.button,
                            type: "submit",
                            disabled: s,
                          },
                          s
                            ? o.a.createElement(Je.a, { size: 24 })
                            : 2 === i
                            ? "Pay"
                            : "Next"
                        )
                      )
                    )
                  )
            )
          );
        },
        Aa = n(309),
        Oa = Object(Le.a)(function (e) {
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
        Ra = function () {
          var e = Oa(),
            a = Object(t.useState)(null),
            n = Object(He.a)(a, 2),
            i = n[0],
            l = n[1];
          return (
            Object(t.useEffect)(function () {
              (function () {
                var e = Object(Ue.a)(
                  Ke.a.mark(function e() {
                    var a, n;
                    return Ke.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), Ea();
                          case 2:
                            (a = e.sent), (n = Object(Aa.a)(a)), l(n);
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
            o.a.createElement(
              Ve.a,
              { component: "main", className: e.boxWrapper },
              o.a.createElement(
                We.a,
                { maxWidth: "md", className: e.container },
                o.a.createElement(
                  ze.a,
                  { elevation: 5 },
                  i
                    ? o.a.createElement(
                        ma.Elements,
                        { stripe: i },
                        o.a.createElement(Na, null)
                      )
                    : null
                )
              )
            )
          );
        },
        Ia = n(543),
        xa = n(548),
        Pa = n(569),
        ja = n(544),
        Ta = n(545),
        Da = n(546),
        Ma = n(547),
        La = function (e) {
          var a = e.separator,
            n = Object(t.useState)(!1),
            i = Object(He.a)(n, 2),
            l = i[0],
            r = i[1],
            c = Object(t.useState)("legal"),
            s = Object(He.a)(c, 2),
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
                  return o.a.createElement(
                    o.a.Fragment,
                    null,
                    "This website is owned and operated by _________.",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    "To contact us:",
                    o.a.createElement("br", null),
                    "Name",
                    o.a.createElement("br", null),
                    "Address line",
                    o.a.createElement("br", null),
                    "postcode city",
                    o.a.createElement("br", null),
                    "country",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    "Phone: ___________"
                  );
                },
              },
              privacy: {
                name: "privacy",
                title: "Privacy Notice",
                description: function () {
                  return o.a.createElement(
                    o.a.Fragment,
                    null,
                    "The present website, including all information and materials contained on it, are managed and controlled by _________, ADDRESS.",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    "Our contact details are provided on our Legal Notice.",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    "The terms and conditions set out in this Privacy Notice apply in conjunction with the more detailed Privacy Policies.",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    o.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "Our Commitment"
                    ),
                    "We are committed to respecting and ensuring the privacy of all the users of this website.",
                    o.a.createElement("br", null),
                    "We will be transparent about the purposes for which we collect data, including personal data, and about the kinds of data we collect and how we use them.",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    o.a.createElement(Me.a, { variant: "h6" }, "Your Consent"),
                    "By using this website, you consent to the terms of this Privacy Notice.",
                    o.a.createElement("br", null),
                    "We may change the terms of this Notice and these Policies from time to time.",
                    o.a.createElement("br", null),
                    "If such changes are made, we will promptly place notices on all the websites so that you can be aware of those changes.",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    "Your continued use of this websites subsequent to such notified changes will mean that you accept those changes, and will be on the terms of this Privacy Notice and those Privacy Policies, as amended from time to time.",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    "What types of information do we collect and store?",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    o.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "Personal Information"
                    ),
                    "You can access most of the pages on the website without telling us who you are and without revealing any personal information.",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    "We do not collect personal information (such as your name, address, phone number or e-mail address, or other personal details) on the website unless you choose to provide them.",
                    o.a.createElement("br", null),
                    "For example, where you express an interest in joining or donating to one of our organizations, subscribe to our email updates, or buy a book or CD or DVD, we will often provide you with an online form that you can fill in and submit online.",
                    o.a.createElement("br", null),
                    'In all these cases, we will inform you of the purpose of the form (unless that is obvious) and provide you with options as concerns the uses of the data (see below: "Your Rights: Right to object").',
                    o.a.createElement("br", null),
                    "We only collect personal information that is relevant and adequate and not excessive for the purposes in question.",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    'Non-personal, aggregate data; the use of "cookies" and of Google Analytics',
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    o.a.createElement(Me.a, { variant: "h6" }, "General"),
                    "Our web servers create anonymous logs during user visits to the website, which are used by us to create aggregate statistics, for example about when the website is accessed, the pages which refer visitors to the website, the type of web browsers visitors use and which pages are viewed.",
                    o.a.createElement("br", null),
                    "These statistics help us understand how the website is used and provide us with valuable information for improving it in the future.",
                    o.a.createElement("br", null),
                    'In this, we use both our own "cookies" and a special tool, Google Analytics, as described below.',
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    o.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "Use of Cookies"
                    ),
                    "A cookie is a text-only piece of information that a website transfers to your computer's hard disk so that the website can remember who you are.",
                    o.a.createElement("br", null),
                    'A cookie will normally contain the name of the Internet domain from which the cookie has come, the "lifetime" of the cookie, and a value, usually a randomly generated unique number.',
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    "We use cookies and collect IP addresses (an IP address is a number that can uniquely identify a specific computer or other network device on the internet).",
                    o.a.createElement("br", null),
                    "We use our own analysis software to look at IP addresses and cookies for the purpose of enhancing your user experience.",
                    o.a.createElement("br", null),
                    "This information is not used to develop a personal profile of you.",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    "Users have the opportunity to set their devices to accept all cookies, to notify them when a cookie is issued, or not to receive cookies at any time.",
                    o.a.createElement("br", null),
                    "To prevent the download of cookies, or otherwise control how cookies are used on your computer, please read the help information supplied with your Internet browser software or go to: ",
                    o.a.createElement(
                      Ia.a,
                      {
                        href: "http://www.allaboutcookies.org",
                        target: "_blank",
                      },
                      "http://www.allaboutcookies.org"
                    ),
                    ".",
                    o.a.createElement("br", null),
                    "However please note that if you do this you may not be able to use the full functionality of this website.",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    o.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "Google Analytics"
                    ),
                    "Our website also uses Google Analytics, a web analytics service provided by Google, Inc. (\u201cGoogle\u201d).",
                    o.a.createElement("br", null),
                    "Google Analytics uses \u201ccookies\u201d to help the website analyze how users use the site (as described above).",
                    o.a.createElement("br", null),
                    "The information generated by the Google Analytics cookie about your use of the website (including a truncated IP address: see below) will be transmitted to and stored by Google on their servers.",
                    o.a.createElement("br", null),
                    "Google will use this information for the purpose of evaluating your use of the website, compiling reports on website activity for website operators such as us, and providing other services relating to website activity and internet usage. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google's behalf.",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    "As explained above, you may refuse the use of cookies\u2014and thus also the use of the Google Analytics cookie\u2014by selecting the appropriate settings on your browser, but this too may affect the extent to which you can fully use the website.",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    o.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "Your Agreement"
                    ),
                    "In accordance to what we already said at the beginning of this Notice, by using this website, you consent to the processing of data about you, and of aggregate data, by us and by Google in the manner and for the purposes set out above.",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    o.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "How do we use information collected?"
                    ),
                    "Your personal information will be retained by us and its service providers in a secure environment, will be kept confidential, and will only be used in connection with the purposes for which it is submitted, or as necessary for us to comply with our legal obligations.",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    o.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "Sharing of your personal information?"
                    ),
                    "Other than as described below, the information you provide will not be sold or rented nor will it be shared with any person or entity unrelated to our company, unless we are required to disclose the information by law.",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    "We may share relevant personal data, obtained through this website for hosting and processing:",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    "Our website may be hosted by a third party service provider and therefore any personal details you submit through this website may be processed by such a third party service provider.",
                    o.a.createElement("br", null),
                    'We may also use other third parties to process some of your personal details, for example to send you books or other goods you have ordered (so-called "fulfillment").',
                    o.a.createElement("br", null),
                    "All of these third party services providers will process your personal information only on our behalf and will be bound by strict confidentiality conditions.",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    o.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "Payment processing and fraud"
                    ),
                    "Your card or other details may be disclosed to banks or relevant financial institutions to arrange payments.",
                    o.a.createElement("br", null),
                    "In the case of a suspected fraudulent transaction, your details may be further disclosed for the sole purpose of performing further checks (for example, disclosure to a credit checking agency).",
                    o.a.createElement("br", null),
                    "Trans-border data flows",
                    o.a.createElement("br", null),
                    "If you have accessed this webpage from within the European Union or the European Economic Area, you should be aware that the disclosure of your personal information discussed above will involve transfer of that information to us.",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    o.a.createElement(Me.a, { variant: "h6" }, "Your Rights"),
                    "Right of access to your personal information:",
                    o.a.createElement("br", null),
                    "You have a right of access to any personal information that we collect about you on this website and that is retrievable from this website by reference to you personally.",
                    o.a.createElement("br", null),
                    "Right of correction:",
                    o.a.createElement("br", null),
                    "You have a right to correct the information we hold on you, or to have it deleted, if it is incorrect, irrelevant or out of date.",
                    o.a.createElement("br", null),
                    "Right to object:",
                    o.a.createElement("br", null),
                    "When we ask for your contact information in various forms, we will explain to you what we want to use those details for, and we will offer you options in regard of their use.",
                    o.a.createElement("br", null),
                    "Specifically, we will explain if we want to use certain information, such as your phone number or mobile phone number or email address, to contact you.",
                    o.a.createElement("br", null),
                    "You can also, at any time, let us know by simple email if you do not want to be contacted any more, either in general or by certain special means (e.g., by text or phone call).",
                    o.a.createElement("br", null),
                    "We will then, within a short period, ensure that such follow-up contacts are stopped.",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    o.a.createElement(
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
                  return o.a.createElement(
                    o.a.Fragment,
                    null,
                    "This website featured to you is subject to the following Terms and our Privacy Notice. If you visit our websites you accept these conditions.",
                    o.a.createElement("br", null),
                    "Please read them carefully.",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    o.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "1. Scope and Addressees"
                    ),
                    'This website is operated and administered by _______ (see "Legal Notice"), and therefore complies with the applicable laws.',
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    o.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "2. Data Privacy Protection"
                    ),
                    'Personally identifiable data of the user of this website will be collected, used and processed in compliance with applicable laws on data privacy protection and our "Privacy Notice".',
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    o.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "3. Intellectual Property Rights"
                    ),
                    "All materials available on this site are protected by copyright laws and international copyright treaty provisions.",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    o.a.createElement(Me.a, { variant: "h6" }, "4. Hyperlinks"),
                    "The Site may contain hyperlinks to the web pages of third parties.",
                    o.a.createElement("br", null),
                    "We shall have no liability for the contents of such web pages and does not make representations about or endorse such web pages or their contents as its own, as we do not control the information on such web pages and is not responsible for the contents and information given thereon. The use of such web pages shall be at the sole risk of the user.",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    o.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "5. Applicable Law, Place of Jurisdiction"
                    ),
                    "These Terms of Use including its disclaimers, terms and conditions shall be governed by\u2014and all disputes relating to or in connection with these Terms of Use or their subject matter shall be resolved in accordance with\u2014the European laws, without giving effect to any principles of conflicts of laws.",
                    o.a.createElement("br", null),
                    "We reserve the right to make changes to this site and these disclaimers, terms and conditions at any time.",
                    o.a.createElement("br", null),
                    "User hereby irrevocably and unconditionally consents to submit to the exclusive jurisdiction of the European court for any litigation arising out of or relating to use of this site (and agrees not to commence any litigation relating thereto except in such courts) waives any objection to the laying of venue of any such litigation.",
                    o.a.createElement("br", null),
                    o.a.createElement("br", null),
                    o.a.createElement(
                      Me.a,
                      { variant: "h6" },
                      "6. Severability"
                    ),
                    "The provisions of these Terms of Use are intended to be severable. If for any reason any provision of these Terms of Use shall be held invalid or unenforceable in whole or in part in any jurisdiction, such provision shall, as to such jurisdiction, be ineffective to the extent of such invalidity or unenforceability without in any manner affecting the validity or enforceability thereof in any other jurisdiction or the remaining provisions hereof in any jurisdiction.",
                    o.a.createElement("br", null)
                  );
                },
              },
              trademarks: {
                name: "trademarks",
                title: "Trademarks",
                description: function () {
                  return o.a.createElement(
                    o.a.Fragment,
                    null,
                    "All materials available on this site are protected by copyright laws and international copyright treaty provisions.",
                    o.a.createElement("br", null),
                    "This material has been placed on this Internet site under the authority of the copyright owner for the sole purpose of viewing of the materials by users of this site.",
                    o.a.createElement("br", null)
                  );
                },
              },
            };
          return o.a.createElement(
            Me.a,
            { variant: "caption" },
            Object.keys(p).map(function (e, n) {
              return o.a.createElement(
                "span",
                { key: n },
                n > 0 && a,
                "\xa0",
                o.a.createElement(
                  Ia.a,
                  { href: "#", name: p[e].name, onClick: d },
                  p[e].title
                )
              );
            }),
            o.a.createElement(
              Pa.a,
              {
                open: l,
                onClose: function () {
                  return r(!1);
                },
                "aria-labelledby": "dialog-title",
                "aria-describedby": "dialog-description",
              },
              o.a.createElement(
                ja.a,
                { id: "dialog-title", color: "primary" },
                p[m].title
              ),
              o.a.createElement(
                Ta.a,
                null,
                o.a.createElement(
                  Da.a,
                  { id: "dialog-description" },
                  p[m].description()
                )
              ),
              o.a.createElement(
                Ma.a,
                null,
                o.a.createElement(
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
        Fa = function () {
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              De.a,
              {
                container: !0,
                justify: "center",
                style: { minHeight: "212px" },
              },
              o.a.createElement(
                De.a,
                {
                  container: !0,
                  item: !0,
                  sm: 6,
                  xs: 11,
                  justify: "space-between",
                },
                o.a.createElement(
                  De.a,
                  { item: !0, sm: 5, xs: 12 },
                  o.a.createElement(xa.a, { color: "action" }),
                  o.a.createElement(
                    Me.a,
                    { paragraph: !0 },
                    "The donations made on this site are sent through a secured connection and processed by Stripe. This site is compliant with the Payment Card Industry and Data Security Standard. Read more about Stripe security ",
                    o.a.createElement(
                      Ia.a,
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
                o.a.createElement(
                  De.a,
                  { item: !0, sm: 5, xs: 11 },
                  o.a.createElement(na.a, { color: "action" }),
                  o.a.createElement(
                    Me.a,
                    { paragraph: !0 },
                    "This Web App is fully responsive. Made in ",
                    o.a.createElement(
                      Ia.a,
                      { href: "https://reactjs.org/", target: "_blank" },
                      "ReactJS"
                    ),
                    ", using ",
                    o.a.createElement(
                      Ia.a,
                      { href: "https://material-ui.com", target: "_blank" },
                      "Material-UI"
                    ),
                    " and ",
                    o.a.createElement(
                      Ia.a,
                      {
                        href: "https://stripe.com/docs/stripe-js/react",
                        target: "_blank",
                      },
                      "React Stripe"
                    ),
                    ". It's given free of use by ",
                    o.a.createElement(
                      Ia.a,
                      { href: "https://angeloron.com", target: "_blank" },
                      "Ange loron"
                    ),
                    ". react-material-ui-stripe-payment is under the MIT license and can be dowloaded ",
                    o.a.createElement(
                      Ia.a,
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
            o.a.createElement(
              je.a,
              {
                position: "static",
                elevation: 0,
                component: "footer",
                color: "default",
              },
              o.a.createElement(
                Te.a,
                { style: { justifyContent: "center" } },
                o.a.createElement(Me.a, { variant: "caption" }, "\xa92020"),
                " ",
                o.a.createElement(La, { separator: "\xa0\u16eb" })
              )
            )
          );
        },
        Ba = n(549),
        Ga = n(550),
        Ka = function () {
          var e = Object(t.useState)(!1),
            a = Object(He.a)(e, 2),
            n = a[0],
            i = a[1];
          return (
            Object(t.useEffect)(function () {
              null ===
                (function (e) {
                  for (
                    var a = e + "=", n = document.cookie.split(";"), t = 0;
                    t < n.length;
                    t++
                  ) {
                    for (var o = n[t]; " " === o.charAt(0); )
                      o = o.substring(1, o.length);
                    if (0 === o.indexOf(a))
                      return o.substring(a.length, o.length);
                  }
                  return null;
                })("CookieAuth") && i(!0),
                (function (e, a, n) {
                  var t = "";
                  if (n) {
                    var o = new Date();
                    o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3),
                      (t = "; expires=" + o.toUTCString());
                  }
                  document.cookie = e + "=" + (a || "") + t + "; path=/";
                })("CookieAuth", 1, 7);
            }, []),
            n
              ? o.a.createElement(
                  je.a,
                  {
                    position: "fixed",
                    elevation: 0,
                    component: "div",
                    color: "default",
                    style: { top: "auto", bottom: 0 },
                  },
                  o.a.createElement(
                    Te.a,
                    { style: { justifyContent: "center" } },
                    o.a.createElement(
                      "div",
                      null,
                      o.a.createElement(
                        Me.a,
                        { variant: "caption" },
                        "By using our site, you acknowledge that you have read and understand our"
                      ),
                      o.a.createElement(La, { separator: "," })
                    ),
                    o.a.createElement(
                      Ba.a,
                      {
                        onClick: function () {
                          return i(!1);
                        },
                        size: "small",
                        style: { marginLeft: "10px", minWidth: "40px" },
                      },
                      o.a.createElement(Ga.a, null)
                    )
                  )
                )
              : null
          );
        },
        Ua = function () {
          return o.a.createElement(
            Oe.a,
            { theme: Pe },
            o.a.createElement(
              Ne,
              null,
              o.a.createElement(
                "div",
                { style: { flexGrow: 1 } },
                o.a.createElement(Be, { title: "PAYMENT FORM" }),
                o.a.createElement(Ra, null),
                o.a.createElement(Fa, null)
              ),
              o.a.createElement(Ka, null)
            )
          );
        },
        Ha = (function (e) {
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
                  le.a.init({ duration: 2e3 });
                },
              },
              {
                key: "render",
                value: function () {
                  return o.a.createElement(
                    "div",
                    { className: "App" },
                    o.a.createElement(
                      I.d,
                      null,
                      o.a.createElement(I.b, {
                        exact: !0,
                        path: "/",
                        component: G,
                      }),
                      o.a.createElement(I.b, {
                        exact: !0,
                        path: "/signin",
                        component: V,
                      }),
                      o.a.createElement(I.b, {
                        exact: !0,
                        path: "/signup",
                        component: J,
                      }),
                      o.a.createElement(I.b, {
                        exact: !0,
                        path: "/Animals/:id/edit",
                        component: pe,
                      }),
                      o.a.createElement(I.b, {
                        exact: !0,
                        path: "/Createanimals",
                        component: de,
                      }),
                      o.a.createElement(I.b, {
                        exact: !0,
                        path: "/Manageanimals",
                        component: ge,
                      }),
                      o.a.createElement(I.b, {
                        exact: !0,
                        path: "/paymentform",
                        component: Ua,
                      }),
                      o.a.createElement(I.b, {
                        exact: !0,
                        path: "/ponctualsponsor",
                        component: _e,
                      }),
                      o.a.createElement(X, {
                        exact: !0,
                        path: "/profile",
                        component: oe,
                      }),
                      o.a.createElement(I.b, {
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
        })(o.a.Component);
      n(473), n(474), n(475), n(476), n(477), n(478), n(479), n(480);
      l.a.render(
        o.a.createElement(
          r.a,
          null,
          o.a.createElement(R, null, o.a.createElement(Ha, null))
        ),
        document.getElementById("root")
      );
    },
  },
  [[340, 1, 2]],
]);
//# sourceMappingURL=main.e7053741.chunk.js.map
