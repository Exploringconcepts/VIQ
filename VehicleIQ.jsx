import { useState, useRef, useEffect } from "react";

const CAR_DATA = {"vehicle":{"owner":"Syed Muhammad Shaarif Anwar","make":"Toyota","model":"Camry","year":2014,"purchased":"24/02/2021","odo_at_purchase":16480},"fuel":[{"yr":2021,"dt":"25/02/2021","cost":50,"ltrs":44.5,"ppl":1.15,"odo":16460,"cat":"Standard Fill \u2014 Partial","car_l":44.5,"can_l":0},{"yr":2021,"dt":"14/03/2021","cost":75,"ltrs":null,"ppl":1.28,"odo":17444,"cat":"Unknown","car_l":null,"can_l":null},{"yr":2021,"dt":"17/03/2021","cost":26.94,"ltrs":21.395,"ppl":1.259,"odo":17453,"cat":"Standard Fill \u2014 Partial","car_l":21.395,"can_l":0},{"yr":2021,"dt":"01/04/2021","cost":66.68,"ltrs":53.088,"ppl":1.256,"odo":18100,"cat":"Standard Fill \u2014 Partial","car_l":53.088,"can_l":0},{"yr":2021,"dt":"30/04/2021","cost":47.08,"ltrs":37.102,"ppl":1.269,"odo":18249,"cat":"Standard Fill \u2014 Partial","car_l":37.102,"can_l":0},{"yr":2021,"dt":"04/04/2021","cost":29.31,"ltrs":26.066,"ppl":1.219,"odo":18488,"cat":"Standard Fill \u2014 Partial","car_l":26.066,"can_l":0},{"yr":2021,"dt":"11/04/2021","cost":54.19,"ltrs":45.033,"ppl":1.189,"odo":19023,"cat":"Standard Fill \u2014 Partial","car_l":45.033,"can_l":0},{"yr":2021,"dt":"02/05/2021","cost":44.63,"ltrs":35.45,"ppl":1.259,"odo":19267,"cat":"Standard Fill \u2014 Partial","car_l":35.45,"can_l":0},{"yr":2021,"dt":"12/05/2021","cost":31.45,"ltrs":24.191,"ppl":1.3,"odo":19498,"cat":"Standard Fill \u2014 Partial","car_l":24.191,"can_l":0},{"yr":2021,"dt":"16/05/2021","cost":64.47,"ltrs":50.017,"ppl":1.289,"odo":20029,"cat":"Standard Fill \u2014 Partial","car_l":50.017,"can_l":0},{"yr":2021,"dt":"21/05/2021","cost":66.31,"ltrs":50.119,"ppl":1.323,"odo":20645,"cat":"Standard Fill \u2014 Partial","car_l":50.119,"can_l":0},{"yr":2021,"dt":"31/05/2021","cost":62.21,"ltrs":48.639,"ppl":1.279,"odo":21179,"cat":"Standard Fill \u2014 Partial","car_l":48.639,"can_l":0},{"yr":2021,"dt":"02/06/2021","cost":55.02,"ltrs":46.909,"ppl":1.173,"odo":21731,"cat":"Standard Fill \u2014 Partial","car_l":46.909,"can_l":0},{"yr":2021,"dt":"09/06/2021","cost":29.27,"ltrs":22.224,"ppl":1.317,"odo":21968,"cat":"Standard Fill \u2014 Partial","car_l":22.224,"can_l":0},{"yr":2021,"dt":"13/06/2021","cost":30,"ltrs":23.274,"ppl":1.289,"odo":22527,"cat":"Standard Fill \u2014 Partial","car_l":23.274,"can_l":0},{"yr":2021,"dt":"17/06/2021","cost":59.02,"ltrs":45.087,"ppl":1.309,"odo":22669,"cat":"Standard Fill \u2014 Partial","car_l":45.087,"can_l":0},{"yr":2021,"dt":"23/06/2021","cost":45.67,"ltrs":30.702,"ppl":1.267,"odo":22917,"cat":"Standard Fill \u2014 Partial","car_l":30.702,"can_l":0},{"yr":2021,"dt":"01/07/2021","cost":55.63,"ltrs":41.855,"ppl":1.329,"odo":23268,"cat":"Standard Fill \u2014 Partial","car_l":41.855,"can_l":0},{"yr":2021,"dt":"08/07/2021","cost":40,"ltrs":30.84,"ppl":1.297,"odo":23667,"cat":"Standard Fill \u2014 Partial","car_l":30.84,"can_l":0},{"yr":2021,"dt":"14/07/2021","cost":null,"ltrs":null,"ppl":null,"odo":23919,"cat":"Unknown","car_l":null,"can_l":null},{"yr":2021,"dt":"16/07/2021","cost":57.31,"ltrs":42.169,"ppl":1.359,"odo":23983,"cat":"Standard Fill \u2014 Partial","car_l":42.169,"can_l":0},{"yr":2021,"dt":"18/07/2021","cost":55.7,"ltrs":41.29,"ppl":1.349,"odo":24508,"cat":"Standard Fill \u2014 Partial","car_l":41.29,"can_l":0},{"yr":2021,"dt":"20/07/2021","cost":40,"ltrs":30.84,"ppl":1.297,"odo":25092,"cat":"Standard Fill \u2014 Partial","car_l":30.84,"can_l":0},{"yr":2021,"dt":"24/07/2021","cost":50,"ltrs":37.341,"ppl":1.339,"odo":25445,"cat":"Standard Fill \u2014 Partial","car_l":37.341,"can_l":0},{"yr":2021,"dt":"29/07/2021","cost":50.02,"ltrs":36.009,"ppl":1.389,"odo":26721,"cat":"Standard Fill \u2014 Partial","car_l":36.009,"can_l":0},{"yr":2021,"dt":"03/08/2021","cost":66.08,"ltrs":49.725,"ppl":1.319,"odo":26006,"cat":"Standard Fill \u2014 Partial","car_l":49.725,"can_l":0},{"yr":2021,"dt":"07/08/2021","cost":42,"ltrs":30.023,"ppl":1.399,"odo":26256,"cat":"Standard Fill \u2014 Partial","car_l":30.023,"can_l":0},{"yr":2021,"dt":"13/08/2021","cost":60.48,"ltrs":43.544,"ppl":1.389,"odo":26595,"cat":"Standard Fill \u2014 Partial","car_l":43.544,"can_l":0},{"yr":2021,"dt":"20/08/2021","cost":59.69,"ltrs":46.672,"ppl":1.279,"odo":27171,"cat":"Standard Fill \u2014 Partial","car_l":46.672,"can_l":0},{"yr":2021,"dt":"21/08/2021","cost":72.57,"ltrs":44.748,"ppl":1.319,"odo":27727,"cat":"Standard Fill \u2014 Partial","car_l":44.748,"can_l":0},{"yr":2021,"dt":"24/08/2021","cost":30,"ltrs":22.971,"ppl":1.306,"odo":28327,"cat":"Standard Fill \u2014 Partial","car_l":22.971,"can_l":0},{"yr":2021,"dt":"03/09/2021","cost":40,"ltrs":30.167,"ppl":1.326,"odo":28423,"cat":"Standard Fill \u2014 Partial","car_l":30.167,"can_l":0},{"yr":2021,"dt":"04/09/2021","cost":50,"ltrs":35.79,"ppl":1.397,"odo":28920,"cat":"Standard Fill \u2014 Partial","car_l":35.79,"can_l":0},{"yr":2021,"dt":"05/09/2021","cost":40.14,"ltrs":30.338,"ppl":1.389,"odo":29110,"cat":"Standard Fill \u2014 Partial","car_l":30.338,"can_l":0},{"yr":2021,"dt":"09/09/2021","cost":51.92,"ltrs":39.575,"ppl":1.312,"odo":29608,"cat":"Standard Fill \u2014 Partial","car_l":39.575,"can_l":0},{"yr":2021,"dt":"11/09/2021","cost":63.31,"ltrs":41.293,"ppl":1.369,"odo":30123,"cat":"Standard Fill \u2014 Partial","car_l":41.293,"can_l":0},{"yr":2021,"dt":"12/09/2021","cost":56.94,"ltrs":39.218,"ppl":1.452,"odo":30574,"cat":"Standard Fill \u2014 Partial","car_l":39.218,"can_l":0},{"yr":2021,"dt":"17/09/2021","cost":53.17,"ltrs":37.415,"ppl":1.421,"odo":31020,"cat":"Standard Fill \u2014 Partial","car_l":37.415,"can_l":0},{"yr":2021,"dt":"18/09/2021","cost":33.5,"ltrs":24.118,"ppl":1.389,"odo":31311,"cat":"Standard Fill \u2014 Partial","car_l":24.118,"can_l":0},{"yr":2021,"dt":"19/09/2021","cost":40,"ltrs":28.45,"ppl":1.406,"odo":31819,"cat":"Standard Fill \u2014 Partial","car_l":28.45,"can_l":0},{"yr":2021,"dt":"25/09/2021","cost":55.61,"ltrs":40.558,"ppl":1.371,"odo":32103,"cat":"Standard Fill \u2014 Partial","car_l":40.558,"can_l":0},{"yr":2021,"dt":"26/09/2021","cost":41.77,"ltrs":31.499,"ppl":1.326,"odo":32854,"cat":"Standard Fill \u2014 Partial","car_l":31.499,"can_l":0},{"yr":2021,"dt":"01/10/2021","cost":61.35,"ltrs":43.45,"ppl":1.412,"odo":33350,"cat":"Standard Fill \u2014 Partial","car_l":43.45,"can_l":0},{"yr":2021,"dt":"03/10/2021","cost":58.64,"ltrs":41.066,"ppl":1.428,"odo":33832,"cat":"Standard Fill \u2014 Partial","car_l":41.066,"can_l":0},{"yr":2021,"dt":"09/10/2021","cost":56.21,"ltrs":40.94,"ppl":1.402,"odo":34197,"cat":"Standard Fill \u2014 Partial","car_l":40.94,"can_l":0},{"yr":2021,"dt":"22/10/2021","cost":67.91,"ltrs":47.367,"ppl":1.449,"odo":34687,"cat":"Standard Fill \u2014 Partial","car_l":47.367,"can_l":0},{"yr":2021,"dt":"24/10/2021","cost":76.2,"ltrs":51.173,"ppl":1.489,"odo":35266,"cat":"Standard Fill \u2014 Partial","car_l":51.173,"can_l":0},{"yr":2021,"dt":"26/10/2021","cost":66.96,"ltrs":45.582,"ppl":1.469,"odo":35784,"cat":"Standard Fill \u2014 Partial","car_l":45.582,"can_l":0},{"yr":2021,"dt":"31/10/2021","cost":62.74,"ltrs":41.057,"ppl":1.606,"odo":36748,"cat":"Standard Fill \u2014 Partial","car_l":41.057,"can_l":0},{"yr":2021,"dt":"12/11/2021","cost":55.91,"ltrs":37.073,"ppl":1.508,"odo":37087,"cat":"Standard Fill \u2014 Partial","car_l":37.073,"can_l":0},{"yr":2021,"dt":"14/11/2021","cost":53,"ltrs":36.831,"ppl":1.439,"odo":37481,"cat":"Standard Fill \u2014 Partial","car_l":36.831,"can_l":0},{"yr":2021,"dt":"19/11/2021","cost":70.31,"ltrs":49.308,"ppl":1.426,"odo":38020,"cat":"Standard Fill \u2014 Partial","car_l":49.308,"can_l":0},{"yr":2021,"dt":"16/12/2021","cost":69,"ltrs":51.531,"ppl":1.339,"odo":38440,"cat":"Standard Fill \u2014 Partial","car_l":51.531,"can_l":0},{"yr":2021,"dt":"23/12/2021","cost":51.71,"ltrs":39.81,"ppl":1.299,"odo":38617,"cat":"Standard Fill \u2014 Partial","car_l":39.81,"can_l":0},{"yr":2021,"dt":"26/12/2021","cost":42.35,"ltrs":30.935,"ppl":1.369,"odo":38909,"cat":"Standard Fill \u2014 Partial","car_l":30.935,"can_l":0},{"yr":2022,"dt":"01/01/2022","cost":58.98,"ltrs":44.712,"ppl":1.319,"odo":39289,"cat":"Standard Fill \u2014 Partial","car_l":44.712,"can_l":0},{"yr":2022,"dt":"06/01/2022","cost":50,"ltrs":36.528,"ppl":1.369,"odo":39775,"cat":"Standard Fill \u2014 Partial","car_l":36.528,"can_l":0},{"yr":2022,"dt":"15/01/2022","cost":47,"ltrs":33.355,"ppl":1.409,"odo":39838,"cat":"Standard Fill \u2014 Partial","car_l":33.355,"can_l":0},{"yr":2022,"dt":"21/01/2022","cost":58.02,"ltrs":38.552,"ppl":1.505,"odo":40178,"cat":"Standard Fill \u2014 Partial","car_l":38.552,"can_l":0},{"yr":2022,"dt":"22/01/2022","cost":32.87,"ltrs":22.842,"ppl":1.439,"odo":40411,"cat":"Standard Fill \u2014 Partial","car_l":22.842,"can_l":0},{"yr":2022,"dt":"26/01/2022","cost":40,"ltrs":27.229,"ppl":1.469,"odo":40912,"cat":"Standard Fill \u2014 Partial","car_l":27.229,"can_l":0},{"yr":2022,"dt":"05/02/2022","cost":60.94,"ltrs":40.01,"ppl":1.523,"odo":40977,"cat":"Standard Fill \u2014 Partial","car_l":40.01,"can_l":0},{"yr":2022,"dt":"08/02/2022","cost":71.02,"ltrs":45.267,"ppl":1.569,"odo":41569,"cat":"Standard Fill \u2014 Partial","car_l":45.267,"can_l":0},{"yr":2022,"dt":"27/02/2022","cost":50.54,"ltrs":31.809,"ppl":1.589,"odo":41791,"cat":"Standard Fill \u2014 Partial","car_l":31.809,"can_l":0},{"yr":2022,"dt":"01/03/2022","cost":50,"ltrs":33.357,"ppl":1.499,"odo":42329,"cat":"Standard Fill \u2014 Partial","car_l":33.357,"can_l":0},{"yr":2022,"dt":"02/03/2022","cost":85.63,"ltrs":53.217,"ppl":1.609,"odo":42804,"cat":"Standard Fill \u2014 Partial","car_l":53.217,"can_l":0},{"yr":2022,"dt":"03/03/2022","cost":24.79,"ltrs":15.313,"ppl":1.619,"odo":42929,"cat":"Standard Fill \u2014 Partial","car_l":15.313,"can_l":0},{"yr":2022,"dt":"05/03/2022","cost":52,"ltrs":33.571,"ppl":1.549,"odo":43255,"cat":"Standard Fill \u2014 Partial","car_l":33.571,"can_l":0},{"yr":2022,"dt":"23/03/2022","cost":78.69,"ltrs":46.891,"ppl":1.676,"odo":43621,"cat":"Standard Fill \u2014 Partial","car_l":46.891,"can_l":0},{"yr":2022,"dt":"01/04/2022","cost":62,"ltrs":40.027,"ppl":1.549,"odo":43953,"cat":"Standard Fill \u2014 Partial","car_l":40.027,"can_l":0},{"yr":2022,"dt":"03/04/2022","cost":16.71,"ltrs":10.014,"ppl":1.669,"odo":44289,"cat":"En Route Top-up","car_l":10.014,"can_l":0},{"yr":2022,"dt":"03/04/2022","cost":67.01,"ltrs":43.258,"ppl":1.549,"odo":44536,"cat":"Standard Fill \u2014 Partial","car_l":43.258,"can_l":0},{"yr":2022,"dt":"15/04/2022","cost":18.44,"ltrs":10.245,"ppl":1.8,"odo":45003,"cat":"En Route Top-up","car_l":10.245,"can_l":0},{"yr":2022,"dt":"15/04/2022","cost":68.01,"ltrs":45.369,"ppl":1.499,"odo":45116,"cat":"Standard Fill \u2014 Partial","car_l":45.369,"can_l":0},{"yr":2022,"dt":"16/04/2022","cost":17.71,"ltrs":10.068,"ppl":1.759,"odo":45446,"cat":"En Route Top-up","car_l":10.068,"can_l":0},{"yr":2022,"dt":"17/04/2022","cost":21.56,"ltrs":12.119,"ppl":1.779,"odo":45492,"cat":"En Route Top-up","car_l":12.119,"can_l":0},{"yr":2022,"dt":"18/04/2022","cost":16.73,"ltrs":9.404,"ppl":1.779,"odo":45582,"cat":"En Route Top-up","car_l":9.404,"can_l":0},{"yr":2022,"dt":"18/04/2022","cost":56.02,"ltrs":37.37,"ppl":1.499,"odo":45828,"cat":"Standard Fill \u2014 Partial","car_l":37.37,"can_l":0},{"yr":2022,"dt":"29/04/2022","cost":28.06,"ltrs":15.061,"ppl":1.863,"odo":46308,"cat":"Standard Fill \u2014 Partial","car_l":15.061,"can_l":0},{"yr":2022,"dt":"29/04/2022","cost":70,"ltrs":43.78,"ppl":1.599,"odo":46421,"cat":"Standard Fill \u2014 Partial","car_l":43.78,"can_l":0},{"yr":2022,"dt":"01/05/2022","cost":15,"ltrs":8.026,"ppl":1.869,"odo":46754,"cat":"En Route Top-up","car_l":8.026,"can_l":0},{"yr":2022,"dt":"03/05/2022","cost":28.35,"ltrs":15.169,"ppl":1.869,"odo":46947,"cat":"Standard Fill \u2014 Partial","car_l":15.169,"can_l":0},{"yr":2022,"dt":"03/05/2022","cost":69.01,"ltrs":41.595,"ppl":1.659,"odo":47193,"cat":"Standard Fill \u2014 Partial","car_l":41.595,"can_l":0},{"yr":2022,"dt":"28/05/2022","cost":50,"ltrs":25.138,"ppl":1.989,"odo":47598,"cat":"Standard Fill \u2014 Partial","car_l":25.138,"can_l":0},{"yr":2022,"dt":"03/06/2022","cost":5,"ltrs":2.381,"ppl":2.1,"odo":47771,"cat":"En Route Top-up","car_l":2.381,"can_l":0},{"yr":2022,"dt":"03/06/2022","cost":89.01,"ltrs":47.88,"ppl":1.859,"odo":47883,"cat":"Standard Fill \u2014 Partial","car_l":47.88,"can_l":0},{"yr":2022,"dt":"05/06/2022","cost":15,"ltrs":6.98,"ppl":2.149,"odo":48245,"cat":"En Route Top-up","car_l":6.98,"can_l":0},{"yr":2022,"dt":"05/06/2022","cost":81,"ltrs":43.572,"ppl":1.859,"odo":48489,"cat":"Standard Fill \u2014 Partial","car_l":43.572,"can_l":0},{"yr":2022,"dt":"24/06/2022","cost":39.39,"ltrs":20.087,"ppl":1.966,"odo":48863,"cat":"Standard Fill \u2014 Partial","car_l":20.087,"can_l":0},{"yr":2022,"dt":"24/06/2022","cost":82,"ltrs":43.18,"ppl":1.899,"odo":49104,"cat":"Standard Fill \u2014 Partial","car_l":43.18,"can_l":0},{"yr":2022,"dt":"01/07/2022","cost":70.01,"ltrs":36.48,"ppl":1.999,"odo":49529,"cat":"Standard Fill \u2014 Partial","car_l":36.48,"can_l":0},{"yr":2022,"dt":"03/07/2022","cost":74.02,"ltrs":41.146,"ppl":1.799,"odo":49884,"cat":"Standard Fill \u2014 Partial","car_l":41.146,"can_l":0},{"yr":2022,"dt":"08/07/2022","cost":68.02,"ltrs":40.037,"ppl":1.699,"odo":50391,"cat":"Standard Fill \u2014 Partial","car_l":40.037,"can_l":0},{"yr":2022,"dt":"10/07/2022","cost":72,"ltrs":42.38,"ppl":1.699,"odo":50941,"cat":"Standard Fill \u2014 Partial","car_l":42.38,"can_l":0},{"yr":2022,"dt":"15/07/2022","cost":74.01,"ltrs":43.562,"ppl":1.699,"odo":51448,"cat":"Standard Fill \u2014 Partial","car_l":43.562,"can_l":0},{"yr":2022,"dt":"23/07/2022","cost":37.2,"ltrs":22.027,"ppl":1.889,"odo":51878,"cat":"Standard Fill \u2014 Partial","car_l":22.027,"can_l":0},{"yr":2022,"dt":"23/07/2022","cost":70.01,"ltrs":43.785,"ppl":1.599,"odo":52122,"cat":"Standard Fill \u2014 Partial","car_l":43.785,"can_l":0},{"yr":2022,"dt":"11/08/2022","cost":50,"ltrs":30.139,"ppl":1.659,"odo":52561,"cat":"Standard Fill \u2014 Partial","car_l":30.139,"can_l":0},{"yr":2022,"dt":"19/08/2022","cost":79.67,"ltrs":48.401,"ppl":1.646,"odo":52835,"cat":"Standard Fill \u2014 Partial","car_l":48.401,"can_l":0},{"yr":2022,"dt":"20/08/2022","cost":70,"ltrs":44.615,"ppl":1.569,"odo":53368,"cat":"Standard Fill \u2014 Partial","car_l":44.615,"can_l":0},{"yr":2022,"dt":"27/08/2022","cost":75,"ltrs":50.032,"ppl":1.499,"odo":53924,"cat":"Standard Fill \u2014 Partial","car_l":50.032,"can_l":0},{"yr":2022,"dt":"28/08/2022","cost":63.01,"ltrs":42.032,"ppl":1.499,"odo":54685,"cat":"Standard Fill \u2014 Partial","car_l":42.032,"can_l":0},{"yr":2022,"dt":"05/09/2022","cost":6,"ltrs":3.966,"ppl":1.513,"odo":54920,"cat":"En Route Top-up","car_l":3.966,"can_l":0},{"yr":2022,"dt":"05/09/2022","cost":69,"ltrs":49.322,"ppl":1.399,"odo":55032,"cat":"Standard Fill \u2014 Partial","car_l":49.322,"can_l":0},{"yr":2022,"dt":"10/09/2022","cost":6,"ltrs":4.17,"ppl":1.439,"odo":55608,"cat":"En Route Top-up","car_l":4.17,"can_l":0},{"yr":2022,"dt":"10/09/2022","cost":68,"ltrs":49.312,"ppl":1.379,"odo":55852,"cat":"Standard Fill \u2014 Partial","car_l":49.312,"can_l":0},{"yr":2022,"dt":"01/10/2022","cost":65.35,"ltrs":42.742,"ppl":1.529,"odo":56238,"cat":"Standard Fill \u2014 Partial","car_l":42.742,"can_l":0},{"yr":2022,"dt":"26/10/2022","cost":67.3,"ltrs":38.477,"ppl":1.749,"odo":56457,"cat":"Standard Fill \u2014 Partial","car_l":38.477,"can_l":0},{"yr":2022,"dt":"11/11/2022","cost":74.85,"ltrs":43.044,"ppl":1.739,"odo":56840,"cat":"Standard Fill \u2014 Partial","car_l":43.044,"can_l":0},{"yr":2022,"dt":"14/11/2022","cost":10,"ltrs":6.101,"ppl":1.639,"odo":57125,"cat":"En Route Top-up","car_l":6.101,"can_l":0},{"yr":2022,"dt":"14/11/2022","cost":67.07,"ltrs":41.945,"ppl":1.599,"odo":57371,"cat":"Standard Fill \u2014 Partial","car_l":41.945,"can_l":0},{"yr":2022,"dt":"03/12/2022","cost":10,"ltrs":6.807,"ppl":1.469,"odo":57772,"cat":"En Route Top-up","car_l":6.807,"can_l":0},{"yr":2022,"dt":"03/12/2022","cost":64.84,"ltrs":46.345,"ppl":1.399,"odo":57786,"cat":"Standard Fill \u2014 Partial","car_l":46.345,"can_l":0},{"yr":2022,"dt":"30/12/2022","cost":39.46,"ltrs":28.421,"ppl":1.389,"odo":57930,"cat":"Standard Fill \u2014 Partial","car_l":28.421,"can_l":0},{"yr":2023,"dt":"19/01/2023","cost":10.28,"ltrs":7.092,"ppl":1.45,"odo":58244,"cat":"En Route Top-up","car_l":7.092,"can_l":0},{"yr":2023,"dt":"19/01/2023","cost":111,"ltrs":92.58,"ppl":1.199,"odo":58357,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":22.58},{"yr":2023,"dt":"22/01/2023","cost":41.01,"ltrs":29.312,"ppl":1.399,"odo":58911,"cat":"Standard Fill \u2014 Partial","car_l":29.312,"can_l":0},{"yr":2023,"dt":"11/02/2023","cost":122,"ltrs":93.916,"ppl":1.299,"odo":59549,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":23.916},{"yr":2023,"dt":"19/02/2023","cost":104.74,"ltrs":80.631,"ppl":1.299,"odo":60359,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":10.631},{"yr":2023,"dt":"24/02/2023","cost":48,"ltrs":40.732,"ppl":1.159,"odo":60965,"cat":"Standard Fill \u2014 Partial","car_l":40.732,"can_l":0},{"yr":2023,"dt":"26/02/2023","cost":68.01,"ltrs":56.72,"ppl":1.199,"odo":61592,"cat":"Standard Fill \u2014 Partial","car_l":56.72,"can_l":0},{"yr":2023,"dt":"03/03/2023","cost":48,"ltrs":30.79,"ppl":1.299,"odo":62117,"cat":"Standard Fill \u2014 Partial","car_l":30.79,"can_l":0},{"yr":2023,"dt":"05/03/2023","cost":110.01,"ltrs":84.687,"ppl":1.299,"odo":62624,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":14.687},{"yr":2023,"dt":"07/04/2023","cost":123,"ltrs":87.917,"ppl":1.399,"odo":63361,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":17.917},{"yr":2023,"dt":"09/04/2023","cost":72.71,"ltrs":51.97,"ppl":1.399,"odo":63903,"cat":"Standard Fill \u2014 Partial","car_l":51.97,"can_l":0},{"yr":2023,"dt":"20/04/2023","cost":111,"ltrs":75.05,"ppl":1.479,"odo":64714,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":5.05},{"yr":2023,"dt":"24/04/2023","cost":100,"ltrs":67.612,"ppl":1.479,"odo":65649,"cat":"Standard Fill \u2014 Near Full Tank","car_l":67.612,"can_l":0},{"yr":2023,"dt":"12/05/2023","cost":91.61,"ltrs":65.483,"ppl":1.399,"odo":66085,"cat":"Standard Fill \u2014 Near Full Tank","car_l":65.483,"can_l":0},{"yr":2023,"dt":"14/05/2023","cost":69.39,"ltrs":49.599,"ppl":1.399,"odo":66652,"cat":"Standard Fill \u2014 Partial","car_l":49.599,"can_l":0},{"yr":2023,"dt":"27/05/2023","cost":95,"ltrs":66.02,"ppl":1.439,"odo":67285,"cat":"Standard Fill \u2014 Near Full Tank","car_l":66.02,"can_l":0},{"yr":2023,"dt":"28/05/2023","cost":66,"ltrs":41,"ppl":1.439,"odo":67882,"cat":"Standard Fill \u2014 Partial","car_l":41,"can_l":0},{"yr":2023,"dt":"25/06/2023","cost":72.54,"ltrs":47.445,"ppl":1.529,"odo":68456,"cat":"Standard Fill \u2014 Partial","car_l":47.445,"can_l":0},{"yr":2023,"dt":"30/06/2023","cost":70.05,"ltrs":53.107,"ppl":1.319,"odo":68803,"cat":"Standard Fill \u2014 Partial","car_l":53.107,"can_l":0},{"yr":2023,"dt":"03/07/2023","cost":25,"ltrs":15.934,"ppl":1.569,"odo":69236,"cat":"Standard Fill \u2014 Partial","car_l":15.934,"can_l":0},{"yr":2023,"dt":"06/07/2023","cost":25,"ltrs":16.038,"ppl":1.559,"odo":69404,"cat":"Standard Fill \u2014 Partial","car_l":16.038,"can_l":0},{"yr":2023,"dt":"09/07/2023","cost":10,"ltrs":6.215,"ppl":1.609,"odo":69576,"cat":"En Route Top-up","car_l":6.215,"can_l":0},{"yr":2023,"dt":"09/07/2023","cost":91,"ltrs":66.961,"ppl":1.359,"odo":69821,"cat":"Standard Fill \u2014 Near Full Tank","car_l":66.961,"can_l":0},{"yr":2023,"dt":"02/08/2023","cost":80.22,"ltrs":47.494,"ppl":1.689,"odo":70414,"cat":"Standard Fill \u2014 Partial","car_l":47.494,"can_l":0},{"yr":2023,"dt":"02/08/2023","cost":65.01,"ltrs":43.368,"ppl":1.499,"odo":70673,"cat":"Standard Fill \u2014 Partial","car_l":43.368,"can_l":0},{"yr":2023,"dt":"06/08/2023","cost":90,"ltrs":60.038,"ppl":1.499,"odo":71303,"cat":"Standard Fill \u2014 Near Full Tank","car_l":60.038,"can_l":0},{"yr":2023,"dt":"12/08/2023","cost":77,"ltrs":51.368,"ppl":1.499,"odo":71844,"cat":"Standard Fill \u2014 Partial","car_l":51.368,"can_l":0},{"yr":2023,"dt":"18/08/2023","cost":50,"ltrs":29.429,"ppl":1.699,"odo":72549,"cat":"Standard Fill \u2014 Partial","car_l":29.429,"can_l":0},{"yr":2023,"dt":"20/08/2023","cost":50,"ltrs":30.506,"ppl":1.639,"odo":72846,"cat":"Standard Fill \u2014 Partial","car_l":30.506,"can_l":0},{"yr":2023,"dt":"23/08/2023","cost":50,"ltrs":30.883,"ppl":1.619,"odo":73065,"cat":"Standard Fill \u2014 Partial","car_l":30.883,"can_l":0},{"yr":2023,"dt":"28/08/2023","cost":86.02,"ltrs":55.53,"ppl":1.549,"odo":73540,"cat":"Standard Fill \u2014 Partial","car_l":55.53,"can_l":0},{"yr":2023,"dt":"20/09/2023","cost":15,"ltrs":8.87,"ppl":1.691,"odo":74212,"cat":"En Route Top-up","car_l":8.87,"can_l":0},{"yr":2023,"dt":"20/09/2023","cost":113,"ltrs":72.953,"ppl":1.549,"odo":74324,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":2.953},{"yr":2023,"dt":"03/10/2023","cost":65.5,"ltrs":44.857,"ppl":1.469,"odo":75137,"cat":"Standard Fill \u2014 Partial","car_l":44.857,"can_l":0},{"yr":2023,"dt":"08/10/2023","cost":75.4,"ltrs":53.896,"ppl":1.399,"odo":75418,"cat":"Standard Fill \u2014 Partial","car_l":53.896,"can_l":0},{"yr":2023,"dt":"09/11/2023","cost":20,"ltrs":13.803,"ppl":1.449,"odo":75878,"cat":"En Route Top-up","car_l":13.803,"can_l":0},{"yr":2023,"dt":"12/11/2023","cost":78.71,"ltrs":56.264,"ppl":1.399,"odo":76692,"cat":"Standard Fill \u2014 Partial","car_l":56.264,"can_l":0},{"yr":2023,"dt":"20/11/2023","cost":69.23,"ltrs":49.488,"ppl":1.399,"odo":77210,"cat":"Standard Fill \u2014 Partial","car_l":49.488,"can_l":0},{"yr":2023,"dt":"28/11/2023","cost":80,"ltrs":62.064,"ppl":1.289,"odo":77838,"cat":"Standard Fill \u2014 Near Full Tank","car_l":62.064,"can_l":0},{"yr":2024,"dt":"25/01/2024","cost":26.58,"ltrs":15.234,"ppl":1.449,"odo":78409,"cat":"Standard Fill \u2014 Partial","car_l":15.234,"can_l":0},{"yr":2024,"dt":"25/01/2024","cost":92,"ltrs":70.82,"ppl":1.299,"odo":78522,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":0.82},{"yr":2024,"dt":"30/01/2024","cost":67.88,"ltrs":49.583,"ppl":1.369,"odo":79023,"cat":"Standard Fill \u2014 Partial","car_l":49.583,"can_l":0},{"yr":2024,"dt":"04/02/2024","cost":55.02,"ltrs":42.357,"ppl":1.299,"odo":79403,"cat":"Standard Fill \u2014 Partial","car_l":42.357,"can_l":0},{"yr":2024,"dt":"10/02/2024","cost":74.17,"ltrs":57.1,"ppl":1.299,"odo":79980,"cat":"Standard Fill \u2014 Partial","car_l":57.1,"can_l":0},{"yr":2024,"dt":"13/02/2024","cost":69.19,"ltrs":null,"ppl":1.299,"odo":80550,"cat":"Unknown","car_l":null,"can_l":null},{"yr":2024,"dt":"01/03/2024","cost":50.02,"ltrs":34.037,"ppl":1.469,"odo":81069,"cat":"Standard Fill \u2014 Partial","car_l":34.037,"can_l":0},{"yr":2024,"dt":"01/03/2024","cost":30,"ltrs":20.52,"ppl":1.462,"odo":81435,"cat":"Standard Fill \u2014 Partial","car_l":20.52,"can_l":0},{"yr":2024,"dt":"03/03/2024","cost":15,"ltrs":10.074,"ppl":1.489,"odo":81603,"cat":"En Route Top-up","car_l":10.074,"can_l":0},{"yr":2024,"dt":"03/03/2024","cost":10,"ltrs":6.489,"ppl":1.541,"odo":81800,"cat":"En Route Top-up","car_l":6.489,"can_l":0},{"yr":2024,"dt":"03/03/2024","cost":87.78,"ltrs":67.572,"ppl":1.299,"odo":81849,"cat":"Standard Fill \u2014 Near Full Tank","car_l":67.572,"can_l":0},{"yr":2024,"dt":"23/03/2024","cost":11.03,"ltrs":7.029,"ppl":1.57,"odo":82406,"cat":"En Route Top-up","car_l":7.029,"can_l":0},{"yr":2024,"dt":"23/03/2024","cost":99,"ltrs":72.846,"ppl":1.359,"odo":82519,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":2.846},{"yr":2024,"dt":"24/03/2024","cost":73,"ltrs":52.555,"ppl":1.389,"odo":83100,"cat":"Standard Fill \u2014 Partial","car_l":52.555,"can_l":0},{"yr":2024,"dt":"05/04/2024","cost":90.25,"ltrs":64.509,"ppl":1.399,"odo":83768,"cat":"Standard Fill \u2014 Near Full Tank","car_l":64.509,"can_l":0},{"yr":2024,"dt":"09/04/2024","cost":40,"ltrs":25.016,"ppl":1.599,"odo":84308,"cat":"Standard Fill \u2014 Partial","car_l":25.016,"can_l":0},{"yr":2024,"dt":"14/04/2024","cost":40.72,"ltrs":64.844,"ppl":1.399,"odo":84702,"cat":"Standard Fill \u2014 Near Full Tank","car_l":64.844,"can_l":0},{"yr":2024,"dt":"29/04/2024","cost":104.79,"ltrs":69.905,"ppl":1.499,"odo":85390,"cat":"Standard Fill \u2014 Near Full Tank","car_l":69.905,"can_l":0},{"yr":2024,"dt":"08/05/2024","cost":72.06,"ltrs":46.518,"ppl":1.549,"odo":86056,"cat":"Standard Fill \u2014 Partial","car_l":46.518,"can_l":0},{"yr":2024,"dt":"14/05/2024","cost":40,"ltrs":25.707,"ppl":1.556,"odo":86524,"cat":"Standard Fill \u2014 Partial","car_l":25.707,"can_l":0},{"yr":2024,"dt":"15/05/2024","cost":50.39,"ltrs":32.531,"ppl":1.549,"odo":86620,"cat":"Standard Fill \u2014 Partial","car_l":32.531,"can_l":0},{"yr":2024,"dt":"24/05/2024","cost":40,"ltrs":25.873,"ppl":1.546,"odo":86997,"cat":"Standard Fill \u2014 Partial","car_l":25.873,"can_l":0},{"yr":2024,"dt":"27/05/2024","cost":40,"ltrs":26.195,"ppl":1.527,"odo":87071,"cat":"Standard Fill \u2014 Partial","car_l":26.195,"can_l":0},{"yr":2024,"dt":"29/05/2024","cost":66.01,"ltrs":47.182,"ppl":1.399,"odo":87308,"cat":"Standard Fill \u2014 Partial","car_l":47.182,"can_l":0},{"yr":2024,"dt":"30/05/2024","cost":63.51,"ltrs":42.893,"ppl":1.399,"odo":87807,"cat":"Standard Fill \u2014 Partial","car_l":42.893,"can_l":0},{"yr":2024,"dt":"02/06/2024","cost":76.89,"ltrs":54.961,"ppl":1.399,"odo":88473,"cat":"Standard Fill \u2014 Partial","car_l":54.961,"can_l":0},{"yr":2024,"dt":"05/07/2024","cost":51.34,"ltrs":30.043,"ppl":1.709,"odo":89076,"cat":"Standard Fill \u2014 Partial","car_l":30.043,"can_l":0},{"yr":2024,"dt":"06/07/2024","cost":86.63,"ltrs":61.92,"ppl":1.399,"odo":89423,"cat":"Standard Fill \u2014 Near Full Tank","car_l":61.92,"can_l":0},{"yr":2024,"dt":"09/07/2024","cost":20,"ltrs":11.841,"ppl":1.689,"odo":89985,"cat":"En Route Top-up","car_l":11.841,"can_l":0},{"yr":2024,"dt":"10/07/2024","cost":94.94,"ltrs":67.865,"ppl":1.399,"odo":90281,"cat":"Standard Fill \u2014 Near Full Tank","car_l":67.865,"can_l":0},{"yr":2024,"dt":"08/08/2024","cost":10,"ltrs":6.54,"ppl":1.529,"odo":90952,"cat":"En Route Top-up","car_l":6.54,"can_l":0},{"yr":2024,"dt":"08/08/2024","cost":96.8,"ltrs":69.189,"ppl":1.399,"odo":90968,"cat":"Standard Fill \u2014 Near Full Tank","car_l":69.189,"can_l":0},{"yr":2024,"dt":"11/08/2024","cost":76.73,"ltrs":54.846,"ppl":1.399,"odo":91595,"cat":"Standard Fill \u2014 Partial","car_l":54.846,"can_l":0},{"yr":2024,"dt":"06/09/2024","cost":20,"ltrs":13.342,"ppl":1.499,"odo":92232,"cat":"En Route Top-up","car_l":13.342,"can_l":0},{"yr":2024,"dt":"07/09/2024","cost":63.27,"ltrs":44.432,"ppl":1.459,"odo":92308,"cat":"Standard Fill \u2014 Partial","car_l":44.432,"can_l":0},{"yr":2024,"dt":"12/09/2024","cost":65.13,"ltrs":47.572,"ppl":1.369,"odo":92786,"cat":"Standard Fill \u2014 Partial","car_l":47.572,"can_l":0},{"yr":2024,"dt":"12/09/2024","cost":56.58,"ltrs":47.188,"ppl":1.199,"odo":93047,"cat":"Standard Fill \u2014 Partial","car_l":47.188,"can_l":0},{"yr":2024,"dt":"15/09/2024","cost":106.27,"ltrs":88.631,"ppl":1.199,"odo":93764,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":18.631},{"yr":2024,"dt":"20/09/2024","cost":51,"ltrs":42.535,"ppl":1.199,"odo":94284,"cat":"Standard Fill \u2014 Partial","car_l":42.535,"can_l":0},{"yr":2024,"dt":"22/09/2024","cost":67.98,"ltrs":56.681,"ppl":1.199,"odo":94915,"cat":"Standard Fill \u2014 Partial","car_l":56.681,"can_l":0},{"yr":2024,"dt":"03/10/2024","cost":83.5,"ltrs":72.673,"ppl":1.149,"odo":95580,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":2.673},{"yr":2024,"dt":"06/10/2024","cost":76.48,"ltrs":59.332,"ppl":1.289,"odo":96247,"cat":"Standard Fill \u2014 Partial","car_l":59.332,"can_l":0},{"yr":2024,"dt":"11/10/2024","cost":44.08,"ltrs":33.914,"ppl":1.299,"odo":96809,"cat":"Standard Fill \u2014 Partial","car_l":33.914,"can_l":0},{"yr":2024,"dt":"14/10/2024","cost":122.2,"ltrs":94.075,"ppl":1.299,"odo":97535,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":24.075},{"yr":2024,"dt":"07/11/2024","cost":40,"ltrs":26.684,"ppl":1.499,"odo":98318,"cat":"Standard Fill \u2014 Partial","car_l":26.684,"can_l":0},{"yr":2024,"dt":"07/11/2024","cost":99.16,"ltrs":76.929,"ppl":1.289,"odo":98414,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":6.929},{"yr":2024,"dt":"11/11/2024","cost":95.9,"ltrs":74.395,"ppl":1.289,"odo":99142,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":4.395},{"yr":2024,"dt":"15/11/2024","cost":30.84,"ltrs":23.929,"ppl":1.289,"odo":99644,"cat":"Standard Fill \u2014 Partial","car_l":23.929,"can_l":0},{"yr":2024,"dt":"17/11/2024","cost":95.98,"ltrs":74.46,"ppl":1.289,"odo":100255,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":4.46},{"yr":2024,"dt":"03/12/2024","cost":122.66,"ltrs":93.751,"ppl":1.279,"odo":101056,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":23.751},{"yr":2024,"dt":"08/12/2024","cost":71.17,"ltrs":55.642,"ppl":1.279,"odo":101590,"cat":"Standard Fill \u2014 Partial","car_l":55.642,"can_l":0},{"yr":2024,"dt":"20/12/2024","cost":107.51,"ltrs":84.057,"ppl":1.279,"odo":102259,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":14.057},{"yr":2025,"dt":"01/01/2025","cost":68.35,"ltrs":46.217,"ppl":1.479,"odo":103072,"cat":"Standard Fill \u2014 Partial","car_l":46.217,"can_l":0},{"yr":2025,"dt":"03/01/2025","cost":117.12,"ltrs":91.574,"ppl":1.279,"odo":103568,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":21.574},{"yr":2025,"dt":"02/02/2025","cost":58.82,"ltrs":40.879,"ppl":1.439,"odo":104057,"cat":"Standard Fill \u2014 Partial","car_l":40.879,"can_l":0},{"yr":2025,"dt":"07/02/2025","cost":75.71,"ltrs":59.118,"ppl":1.299,"odo":104363,"cat":"Standard Fill \u2014 Partial","car_l":59.118,"can_l":0},{"yr":2025,"dt":"09/02/2025","cost":112.27,"ltrs":89.173,"ppl":1.259,"odo":104959,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":19.173},{"yr":2025,"dt":"28/02/2025","cost":77.35,"ltrs":61.464,"ppl":1.259,"odo":105688,"cat":"Standard Fill \u2014 Near Full Tank","car_l":61.464,"can_l":0},{"yr":2025,"dt":"02/03/2025","cost":91.05,"ltrs":72.318,"ppl":1.259,"odo":106210,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":2.318},{"yr":2025,"dt":"27/03/2025","cost":132.45,"ltrs":94.679,"ppl":1.399,"odo":106994,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":24.679},{"yr":2025,"dt":"01/04/2025","cost":99.53,"ltrs":83.009,"ppl":1.199,"odo":107825,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":13.009},{"yr":2025,"dt":"17/04/2025","cost":69.12,"ltrs":62.89,"ppl":1.099,"odo":108453,"cat":"Standard Fill \u2014 Near Full Tank","car_l":62.89,"can_l":0},{"yr":2025,"dt":"21/04/2025","cost":70.96,"ltrs":64.572,"ppl":1.099,"odo":109147,"cat":"Standard Fill \u2014 Near Full Tank","car_l":64.572,"can_l":0},{"yr":2025,"dt":"08/05/2025","cost":75.89,"ltrs":65.475,"ppl":1.159,"odo":109801,"cat":"Standard Fill \u2014 Near Full Tank","car_l":65.475,"can_l":0},{"yr":2025,"dt":"11/05/2025","cost":95.36,"ltrs":82.28,"ppl":1.159,"odo":110720,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":12.28},{"yr":2025,"dt":"16/05/2025","cost":31.02,"ltrs":26.762,"ppl":1.159,"odo":111259,"cat":"Standard Fill \u2014 Partial","car_l":26.762,"can_l":0},{"yr":2025,"dt":"20/05/2025","cost":95.98,"ltrs":82.81,"ppl":1.159,"odo":111920,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":12.81},{"yr":2025,"dt":"23/05/2025","cost":51.98,"ltrs":44.851,"ppl":1.159,"odo":112426,"cat":"Standard Fill \u2014 Partial","car_l":44.851,"can_l":0},{"yr":2025,"dt":"25/05/2025","cost":53.4,"ltrs":46.074,"ppl":1.159,"odo":112945,"cat":"Standard Fill \u2014 Partial","car_l":46.074,"can_l":0},{"yr":2025,"dt":"05/06/2025","cost":57.099,"ltrs":66.18,"ppl":1.159,"odo":113533,"cat":"Standard Fill \u2014 Near Full Tank","car_l":66.18,"can_l":0},{"yr":2025,"dt":"08/06/2025","cost":58.3,"ltrs":50.298,"ppl":1.159,"odo":114080,"cat":"Standard Fill \u2014 Partial","car_l":50.298,"can_l":0},{"yr":2025,"dt":"13/06/2025","cost":50.37,"ltrs":43.459,"ppl":1.159,"odo":114622,"cat":"Standard Fill \u2014 Partial","car_l":43.459,"can_l":0},{"yr":2025,"dt":"15/06/2025","cost":58.52,"ltrs":50.489,"ppl":1.159,"odo":115127,"cat":"Standard Fill \u2014 Partial","car_l":50.489,"can_l":0},{"yr":2025,"dt":"13/07/2025","cost":34.39,"ltrs":26.072,"ppl":1.319,"odo":115703,"cat":"Standard Fill \u2014 Partial","car_l":26.072,"can_l":0},{"yr":2025,"dt":"19/07/2025","cost":46.67,"ltrs":37.068,"ppl":1.259,"odo":115984,"cat":"Standard Fill \u2014 Partial","car_l":37.068,"can_l":0},{"yr":2025,"dt":"21/07/2025","cost":50,"ltrs":45.5,"ppl":1.099,"odo":116275,"cat":"Standard Fill \u2014 Partial","car_l":45.5,"can_l":0},{"yr":2025,"dt":"23/07/2025","cost":90.38,"ltrs":82.438,"ppl":1.099,"odo":116822,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":12.438},{"yr":2025,"dt":"17/08/2025","cost":48.93,"ltrs":38.254,"ppl":1.279,"odo":117603,"cat":"Standard Fill \u2014 Partial","car_l":38.254,"can_l":0},{"yr":2025,"dt":"31/08/2025","cost":34.11,"ltrs":27.094,"ppl":1.259,"odo":117811,"cat":"Standard Fill \u2014 Partial","car_l":27.094,"can_l":0},{"yr":2025,"dt":"01/09/2025","cost":74.9,"ltrs":68.162,"ppl":1.099,"odo":118071,"cat":"Standard Fill \u2014 Near Full Tank","car_l":68.162,"can_l":0},{"yr":2025,"dt":"08/09/2025","cost":75.15,"ltrs":68.381,"ppl":1.099,"odo":118825,"cat":"Standard Fill \u2014 Near Full Tank","car_l":68.381,"can_l":0},{"yr":2025,"dt":"08/10/2025","cost":10,"ltrs":8.432,"ppl":1.186,"odo":119607,"cat":"En Route Top-up","car_l":8.432,"can_l":0},{"yr":2025,"dt":"08/10/2025","cost":107.31,"ltrs":91.014,"ppl":1.179,"odo":119759,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":21.014},{"yr":2025,"dt":"17/10/2025","cost":83.73,"ltrs":71.021,"ppl":1.179,"odo":120539,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":1.021},{"yr":2025,"dt":"05/11/2025","cost":15,"ltrs":11.287,"ppl":1.329,"odo":121119,"cat":"En Route Top-up","car_l":11.287,"can_l":0},{"yr":2025,"dt":"07/11/2025","cost":74.36,"ltrs":67.663,"ppl":1.099,"odo":121401,"cat":"Standard Fill \u2014 Near Full Tank","car_l":67.663,"can_l":0},{"yr":2025,"dt":"11/11/2025","cost":100.18,"ltrs":91.153,"ppl":1.099,"odo":122054,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":21.153},{"yr":2025,"dt":"29/11/2025","cost":93.6,"ltrs":81.46,"ppl":1.149,"odo":122749,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":11.46},{"yr":2025,"dt":"07/12/2025","cost":60.86,"ltrs":76.379,"ppl":1.149,"odo":123591,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":6.379},{"yr":2025,"dt":"23/12/2025","cost":73.8,"ltrs":70.357,"ppl":1.049,"odo":124307,"cat":"Full Fill \u2014 Car + Cans","car_l":70,"can_l":0.357},{"yr":2025,"dt":"31/12/2025","cost":20,"ltrs":16.313,"ppl":1.226,"odo":124980,"cat":"Standard Fill \u2014 Partial","car_l":16.313,"can_l":0},{"yr":2025,"dt":"31/12/2025","cost":67.09,"ltrs":63.954,"ppl":1.049,"odo":125096,"cat":"Standard Fill \u2014 Near Full Tank","car_l":63.954,"can_l":0},{"yr":2026,"dt":"09/01/2026","cost":51.35,"ltrs":48.953,"ppl":1.049,"odo":125631,"cat":"Standard Fill \u2014 Partial","car_l":48.953,"can_l":0},{"yr":2026,"dt":"11/01/2026","cost":59.59,"ltrs":null,"ppl":1.049,"odo":126185,"cat":"Unknown","car_l":null,"can_l":null},{"yr":2026,"dt":"06/02/2026","cost":55.85,"ltrs":44.257,"ppl":1.262,"odo":126816,"cat":"Standard Fill \u2014 Partial","car_l":44.257,"can_l":0},{"yr":2026,"dt":"08/02/2026","cost":10,"ltrs":8.15,"ppl":1.227,"odo":127291,"cat":"En Route Top-up","car_l":8.15,"can_l":0},{"yr":2026,"dt":"08/02/2026","cost":53.11,"ltrs":48.324,"ppl":1.099,"odo":127401,"cat":"Standard Fill \u2014 Partial","car_l":48.324,"can_l":0},{"yr":2026,"dt":"18/02/2026","cost":40.12,"ltrs":32.644,"ppl":1.229,"odo":127702,"cat":"Standard Fill \u2014 Partial","car_l":32.644,"can_l":0},{"yr":2026,"dt":"19/02/2026","cost":51.54,"ltrs":42.984,"ppl":1.199,"odo":128193,"cat":"Standard Fill \u2014 Partial","car_l":42.984,"can_l":0},{"yr":2026,"dt":"22/02/2026","cost":50,"ltrs":40.032,"ppl":1.249,"odo":128733,"cat":"Standard Fill \u2014 Partial","car_l":40.032,"can_l":0},{"yr":2026,"dt":"02/03/2026","cost":44.08,"ltrs":44.048,"ppl":0.999,"odo":129045,"cat":"Standard Fill \u2014 Partial","car_l":44.048,"can_l":0},{"yr":2026,"dt":"03/03/2026","cost":42.92,"ltrs":42.962,"ppl":0.999,"odo":129329,"cat":"Standard Fill \u2014 Partial","car_l":42.962,"can_l":0}],"maintenance":[{"Date":"19/03/2021","Service Type":"General Inspection + Oil Change","Details":"General inspection at Levesque Garage, Ottawa. Includes oil change (confirmed).","Notes":"Odometer not recorded; approx ~17,500 KM based on fuel log context"},{"Date":"24/02/2021","Odometer (KM)":"16980","Service Type":"Oil Change + Purchase Service","Details":"Toyota Camry purchased for ~$12,000. Service done with oil change at acquisition.","Notes":"Vehicle acquired; baseline service"},{"Date":"09/09/2021","Odometer (KM)":"29608","Service Type":"Oil Change + Tyre Rotation","Details":"Oil change and tyre rotation.","Interval Since Last (KM)":"12628","Interval Status":"\u274c Over Limit"},{"Date":"14/11/2021","Odometer (KM)":"37500","Service Type":"Tyre Change \u2014 Winter","Details":"New winter tyres installed.","Notes":"Approx odometer ~37,500 KM"},{"Date":"08/03/2022","Odometer (KM)":"43512","Service Type":"Full Service","Details":"Oil change. Wiper blades replaced. Cabin filter + air filter changed. Brake fluid + coolant top-up.","Notes":"Most comprehensive service recorded"},{"Date":"30/08/2022","Odometer (KM)":"54680","Service Type":"Oil Change","Details":"Oil change.","Interval Since Last (KM)":"25072","Interval Status":"\u274c Over Limit","Notes":"No additional details recorded in log"},{"Date":"13/11/2022","Odometer (KM)":"57000","Service Type":"Tyre Change \u2014 Winter Swap","Details":"Winter tyres swapped on.","Notes":"Approx odometer ~57,000 KM"},{"Date":"12/06/2023","Odometer (KM)":"68328","Service Type":"Oil Change","Details":"Oil change.","Interval Since Last (KM)":"13648","Interval Status":"\u274c Over Limit"},{"Date":"11/11/2023","Odometer (KM)":"76367","Service Type":"Oil Change","Details":"Oil change.","Interval Since Last (KM)":"8039","Interval Status":"\u2705 Good","Notes":"Coincides with winter tyre swap same date"},{"Date":"11/11/2023","Odometer (KM)":"76367","Service Type":"Tyre Change \u2014 Winter Swap","Details":"Winter tyres swapped on.","Notes":"Coincides with oil change same date"},{"Date":"~2024 (est.)","Odometer (KM)":"84517","Service Type":"Oil Change (Estimated)","Details":"Estimated oil change \u2014 not logged. Interval gap 76,367\u2192108,959 KM (~32,600 KM) requires ~3 changes at 8-10K intervals.","Interval Since Last (KM)":"8150","Interval Status":"\u2705 Good","Notes":"Estimated KM: 84,517 (~8,150 KM after last recorded)"},{"Date":"~2024 (est.)","Odometer (KM)":"92667","Service Type":"Oil Change (Estimated)","Details":"Estimated oil change \u2014 not logged.","Interval Since Last (KM)":"8150","Interval Status":"\u2705 Good","Notes":"Estimated KM: 92,667"},{"Date":"~2024 (est.)","Odometer (KM)":"100817","Service Type":"Oil Change (Estimated)","Details":"Estimated oil change \u2014 not logged.","Interval Since Last (KM)":"8150","Interval Status":"\u2705 Good","Notes":"Estimated KM: 100,817"},{"Date":"21/04/2025","Odometer (KM)":"108959","Service Type":"Oil Change + Repair","Details":"Oil change. Left tail light replaced.","Interval Since Last (KM)":"8142","Interval Status":"\u2705 Good","Notes":"Coincides with summer tyre installation same date"},{"Date":"21/04/2025","Odometer (KM)":"108959","Service Type":"Tyre Change \u2014 Summer Swap","Details":"Winter tyres removed, summer tyres installed.","Notes":"Coincides with oil change same date"},{"Date":"~2025 (est.)","Odometer (KM)":"117500","Service Type":"Oil Change (Estimated)","Details":"Oil change \u2014 done but not logged (self-noted in log).","Interval Since Last (KM)":"8541","Interval Status":"\u2705 Good","Notes":"Estimated KM ~117,500 per owner confirmation"},{"Date":"05/09/2025","Odometer (KM)":"118539","Service Type":"Repair","Details":"Passenger front side tyre \u2014 control rod broke and replaced.","Notes":"Unscheduled repair"},{"Date":"08/11/2025","Odometer (KM)":"121670","Service Type":"Tyre Change \u2014 Winter Swap","Details":"Winter tyres installed at Musi (shop).","Notes":"Approx odometer ~121,670 KM"},{"Date":"10/01/2026","Odometer (KM)":"125901","Service Type":"Oil Change","Details":"Oil change.","Interval Since Last (KM)":"8401","Interval Status":"\u2705 Good"}],"carwash":[{"Date":"~01/03/2021","Cost ($)":"20","Odometer (KM)":"17603","Notes":"Date estimated ~early March 2021; odometer from log"},{"Date":"20/03/2021","Cost ($)":"14.99","Odometer (KM)":"18294"},{"Date":"03/04/2021","Cost ($)":"18.99","Odometer (KM)":"21179"},{"Date":"20/05/2021","Cost ($)":"8.99","Odometer (KM)":"38909"},{"Date":"26/12/2021","Cost ($)":"8.99","Odometer (KM)":"41675"},{"Date":"08/02/2022","Cost ($)":"8.99","Odometer (KM)":"41675","Notes":"\u26a0\ufe0f REVIEW \u2014 odometer same as Dec 2021 entry; verify"},{"Date":"06/03/2026","Cost ($)":"21.49","Odometer (KM)":"129570"}]};

const SYSTEM_PROMPT = `You are an intelligent vehicle data analyst for a Toyota Camry 2014 owned by Syed Muhammad Shaarif Anwar. You have access to their complete vehicle log data from February 2021 to March 2026, covering fuel purchases, maintenance records, and car washes.

VEHICLE DATA:
${JSON.stringify(CAR_DATA, null, 1)}

YOUR CAPABILITIES:

1. PERSONAL DATA QUERIES: Answer precise questions about the owner's actual driving data - costs, fuel efficiency, fill patterns, maintenance history, odometer readings, etc.
1. COMPARATIVE ANALYSIS: Compare the owner's real data against typical benchmarks for Toyota Camry 2014, similar sedans, or Canadian driving averages. Use your knowledge of typical vehicle performance metrics.
1. TREND ANALYSIS: Identify patterns over time - seasonal fuel price changes, efficiency trends, driving intensity by year.
1. PREDICTIVE INSIGHTS: Based on historical patterns, estimate future costs, maintenance schedules, or when next service is due.
1. COST BREAKDOWN: Total cost of ownership analysis including fuel, maintenance, car washes.

KEY DATA FACTS:

- 255 fuel log entries (Feb 2021 - Mar 2026)
- Total fuel spend: ~$15,174
- Total litres purchased: ~11,016L
- Total KM driven: ~112,869 KM
- Average fuel efficiency: ~9.8L/100km
- Average price paid per litre: ~$1.377
- Vehicle has 2 gas cans (20L + 25L) used as reserve
- Tyendinaga (First Nations reserve) is preferred fill station for cheaper fuel
- Fill categories: En Route Top-up (small stops), Standard Fill, Full Fill (car + cans)
- Oil changes tracked with interval analysis

RESPONSE STYLE:

- Be conversational, precise, and insightful
- Lead with the direct answer, then add context
- When comparing to benchmarks, clearly distinguish "your data" vs "typical/average"
- Use specific numbers from the data -- don't be vague
- Flag any interesting anomalies or insights proactively
- Keep responses focused and scannable -- use bullet points for multi-part answers
- If asked about something not in the data, say so clearly and offer what you can infer`;

const SUGGESTED_QUERIES = [
"What's my average fuel cost per month in 2024?",
"How does my fuel efficiency compare to a typical Camry 2014?",
"When is my next oil change due?",
"Which year was most expensive for fuel?",
"How much have I spent on gas at Tyendinaga vs other stations?",
"What's my total cost of ownership so far?",
"Show me my fuel efficiency trend over the years",
"How many full car+can fills did I do in 2022?",
];

const ThinkingDots = () => (

  <div style={{ display: "flex", gap: "6px", alignItems: "center", padding: "4px 0" }}>
    {[0, 1, 2].map(i => (
      <div key={i} style={{
        width: 8, height: 8, borderRadius: "50%",
        background: "#C8A96E",
        animation: "bounce 1.2s ease-in-out infinite",
        animationDelay: `${i * 0.2}s`,
      }} />
    ))}
  </div>
);

const StatCard = ({ label, value, sub }) => (

  <div style={{
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(200,169,110,0.2)",
    borderRadius: 12,
    padding: "14px 18px",
    flex: 1, minWidth: 140,
  }}>
    <div style={{ fontSize: 11, color: "#8A8A9A", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>{label}</div>
    <div style={{ fontSize: 22, fontWeight: 700, color: "#C8A96E", fontFamily: "'DM Serif Display', serif" }}>{value}</div>
    {sub && <div style={{ fontSize: 11, color: "#6A6A7A", marginTop: 3 }}>{sub}</div>}
  </div>
);

export default function App() {
const [messages, setMessages] = useState([]);
const [input, setInput] = useState("");
const [loading, setLoading] = useState(false);
const [showSuggestions, setShowSuggestions] = useState(true);
const bottomRef = useRef(null);
const inputRef = useRef(null);

useEffect(() => {
bottomRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages, loading]);

const sendMessage = async (text) => {
const userText = text || input.trim();
if (!userText || loading) return;
setInput("");
setShowSuggestions(false);

```
const newMessages = [...messages, { role: "user", content: userText }];
setMessages(newMessages);
setLoading(true);

try {
  const systemWithData = SYSTEM_PROMPT.replace(
    '${JSON.stringify(CAR_DATA, null, 1)}',
    JSON.stringify(CAR_DATA, null, 1)
  );

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      system: systemWithData,
      messages: newMessages,
    }),
  });

  const data = await response.json();
  const assistantText = data.content?.map(b => b.text || "").join("") || "Sorry, I couldn't process that.";
  setMessages([...newMessages, { role: "assistant", content: assistantText }]);
} catch (err) {
  setMessages([...newMessages, { role: "assistant", content: "Connection error. Please try again." }]);
}
setLoading(false);
```

};

const handleKey = (e) => {
if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
};

const formatMessage = (text) => {
const lines = text.split("\n");
return lines.map((line, i) => {
if (line.startsWith("**") && line.endsWith("**")) {
return <div key={i} style={{ fontWeight: 700, color: "#E8D5A3", marginTop: 10, marginBottom: 2 }}>{line.slice(2,-2)}</div>;
}
if (line.startsWith("- ") || line.startsWith("• ")) {
return <div key={i} style={{ display: "flex", gap: 8, marginBottom: 3, paddingLeft: 4 }}>
<span style={{ color: "#C8A96E", marginTop: 2, flexShrink: 0 }}>▸</span>
<span>{line.slice(2)}</span>
</div>;
}
if (/^\d+./.test(line)) {
return <div key={i} style={{ marginBottom: 3, paddingLeft: 4 }}>{line}</div>;
}
if (line === "") return <div key={i} style={{ height: 8 }} />;
return <div key={i}>{line}</div>;
});
};

return (
<div style={{
minHeight: "100vh",
background: "#0D0D14",
fontFamily: "'DM Sans', sans-serif",
color: "#E8E8F0",
display: "flex",
flexDirection: "column",
}}>
<style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap'); * { box-sizing: border-box; margin: 0; padding: 0; } @keyframes bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-8px)} } @keyframes fadeIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} } @keyframes shimmer { 0%{background-position:200% center} 100%{background-position:-200% center} } ::-webkit-scrollbar{width:4px} ::-webkit-scrollbar-track{background:transparent} ::-webkit-scrollbar-thumb{background:#2A2A3A;border-radius:4px} textarea{resize:none;outline:none;border:none;background:transparent;color:#E8E8F0;font-family:inherit;font-size:15px;line-height:1.5;width:100%;} textarea::placeholder{color:#4A4A5A;} .suggest-btn:hover{background:rgba(200,169,110,0.15)!important;border-color:rgba(200,169,110,0.5)!important;transform:translateY(-1px);} .send-btn:hover{background:#B8940E!important;} .send-btn:disabled{opacity:0.4;cursor:not-allowed;}`}</style>

```
  {/* Header */}
  <div style={{
    borderBottom: "1px solid rgba(200,169,110,0.15)",
    padding: "18px 32px",
    display: "flex", alignItems: "center", justifyContent: "space-between",
    background: "rgba(13,13,20,0.95)",
    backdropFilter: "blur(20px)",
    position: "sticky", top: 0, zIndex: 100,
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div style={{
        width: 40, height: 40, borderRadius: 10,
        background: "linear-gradient(135deg, #C8A96E, #8B6914)",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 18,
      }}>🚗</div>
      <div>
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, color: "#E8D5A3", letterSpacing: "0.01em" }}>
          VehicleIQ
        </div>
        <div style={{ fontSize: 11, color: "#6A6A7A", letterSpacing: "0.08em" }}>
          TOYOTA CAMRY 2014 · PERSONAL ANALYTICS
        </div>
      </div>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#4CAF50", boxShadow: "0 0 8px #4CAF50" }} />
      <span style={{ fontSize: 12, color: "#6A6A7A" }}>Live · 255 records</span>
    </div>
  </div>

  {/* Stats Bar */}
  <div style={{
    padding: "16px 32px",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    display: "flex", gap: 12, flexWrap: "wrap",
    background: "rgba(255,255,255,0.01)",
  }}>
    <StatCard label="Total Fuel Spend" value="$15,174" sub="Feb 2021 - Mar 2026" />
    <StatCard label="KM Driven" value="112,869" sub="Since purchase" />
    <StatCard label="Avg Efficiency" value="9.8L/100km" sub="vs ~10.2L typical Camry" />
    <StatCard label="Avg Price/Litre" value="$1.377" sub="255 fill-ups logged" />
    <StatCard label="Total Litres" value="11,016L" sub="incl. gas can fills" />
  </div>

  {/* Chat Area */}
  <div style={{ flex: 1, overflowY: "auto", padding: "24px 32px", maxWidth: 900, width: "100%", margin: "0 auto" }}>

    {messages.length === 0 && (
      <div style={{ animation: "fadeIn 0.6s ease both" }}>
        <div style={{ textAlign: "center", padding: "40px 0 32px" }}>
          <div style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 32, color: "#E8D5A3",
            marginBottom: 10, lineHeight: 1.2,
          }}>
            What would you like to know<br/>about your vehicle?
          </div>
          <div style={{ color: "#6A6A7A", fontSize: 14, maxWidth: 480, margin: "0 auto" }}>
            Ask anything -- fuel costs, efficiency trends, maintenance history,
            comparisons to other vehicles, or total cost of ownership.
          </div>
        </div>

        {showSuggestions && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginTop: 8 }}>
            {SUGGESTED_QUERIES.map((q, i) => (
              <button key={i} className="suggest-btn" onClick={() => sendMessage(q)}
                style={{
                  background: "rgba(200,169,110,0.08)",
                  border: "1px solid rgba(200,169,110,0.25)",
                  borderRadius: 20, padding: "9px 16px",
                  color: "#C8A96E", fontSize: 13, cursor: "pointer",
                  transition: "all 0.2s", fontFamily: "'DM Sans', sans-serif",
                }}>
                {q}
              </button>
            ))}
          </div>
        )}
      </div>
    )}

    {messages.map((msg, i) => (
      <div key={i} style={{
        display: "flex",
        justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
        marginBottom: 18,
        animation: "fadeIn 0.35s ease both",
      }}>
        {msg.role === "assistant" && (
          <div style={{
            width: 30, height: 30, borderRadius: 8, flexShrink: 0,
            background: "linear-gradient(135deg, #C8A96E, #8B6914)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, marginRight: 10, marginTop: 2,
          }}>🚗</div>
        )}
        <div style={{
          maxWidth: "78%",
          background: msg.role === "user"
            ? "linear-gradient(135deg, #C8A96E, #A07840)"
            : "rgba(255,255,255,0.04)",
          border: msg.role === "user" ? "none" : "1px solid rgba(255,255,255,0.07)",
          borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
          padding: "12px 16px",
          fontSize: 14, lineHeight: 1.65,
          color: msg.role === "user" ? "#1A1208" : "#D8D8E8",
          fontWeight: msg.role === "user" ? 500 : 400,
        }}>
          {msg.role === "assistant" ? formatMessage(msg.content) : msg.content}
        </div>
      </div>
    ))}

    {loading && (
      <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 18, animation: "fadeIn 0.3s ease both" }}>
        <div style={{
          width: 30, height: 30, borderRadius: 8, flexShrink: 0,
          background: "linear-gradient(135deg, #C8A96E, #8B6914)",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14,
        }}>🚗</div>
        <div style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "18px 18px 18px 4px",
          padding: "12px 16px",
        }}>
          <ThinkingDots />
        </div>
      </div>
    )}
    <div ref={bottomRef} />
  </div>

  {/* Input Area */}
  <div style={{
    padding: "16px 32px 24px",
    background: "rgba(13,13,20,0.95)",
    backdropFilter: "blur(20px)",
    borderTop: "1px solid rgba(255,255,255,0.05)",
    maxWidth: 900, width: "100%", margin: "0 auto",
    alignSelf: "stretch",
  }}>
    <div style={{
      display: "flex", alignItems: "flex-end", gap: 12,
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(200,169,110,0.25)",
      borderRadius: 16, padding: "12px 16px",
      transition: "border-color 0.2s",
    }}
      onFocus={() => {}} 
    >
      <textarea
        ref={inputRef}
        rows={1}
        value={input}
        onChange={e => {
          setInput(e.target.value);
          e.target.style.height = "auto";
          e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
        }}
        onKeyDown={handleKey}
        placeholder="Ask about your fuel costs, efficiency, maintenance, or compare to other vehicles..."
        style={{ flex: 1, minHeight: 24 }}
      />
      <button className="send-btn" onClick={() => sendMessage()} disabled={!input.trim() || loading}
        style={{
          width: 36, height: 36, borderRadius: 10, border: "none",
          background: "#C8A96E", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background 0.2s", flexShrink: 0,
        }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A1208" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      </button>
    </div>
    <div style={{ fontSize: 11, color: "#3A3A4A", textAlign: "center", marginTop: 10, letterSpacing: "0.05em" }}>
      VEHICLEIQ PROOF OF CONCEPT · POWERED BY CLAUDE AI · DATA: 2021-2026
    </div>
  </div>
</div>
```

);
}
