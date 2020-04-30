# Matrix-style rundown

[![Netlify Status](https://api.netlify.com/api/v1/badges/283de46b-13c3-4b86-92fe-2fa96057cf6c/deploy-status)](https://app.netlify.com/sites/polatengin-rome/deploys)

[![GitHub Actions Status](https://github.com/polatengin/rome/workflows/Build%20and%20Publish/badge.svg)](https://github.com/polatengin/rome/workflows/ci-and-cd)

[Türkçe açıklama](#tr)

[English description](#en)

# tr

Matrix usulü kayan yazı

Bu projenin çalışan halini [https://polatengin-rome.netlify.com/](https://polatengin-rome.netlify.com/) adresinde kullanabilirsiniz.

Bu projeyi yapma sebebim;

* [Webpack](https://github.com/webpack/webpack) ve [PostCSS](https://github.com/postcss/postcss) konfigure ederek, bir _html_ sayfasına _javascript_ ve _css_ inject etmek
* Bir web uygulamasında farklı bir font yüklemek ve kullanmak
* [GitHub Actions](https://github.com/features/actions) ile bir pipeline oluşturmak ve çalıştırmak
* [VS Code DevContainer](https://code.visualstudio.com/docs/remote/containers) içerisinde proje geliştirme alışkanlığı kazanmak
* CSS ile _keyframe_ animasyonlar geliştirmek

Bu projede kullandığım teknolojiler;

* Typescript
* Webpack
  * PostCSS
* GitHub Actions
* Docker
* Netlify
* DevContainers

Projeyi oluşturmak için boş bir dizinde aşağıdaki komutu çalıştırıyoruz

```bash
npm init --force
```

Öncelikle [src/index.html](./src/index.html) dosyasını oluşturuyor, içerisine `scene` _id_ değerine sahip bir _div_ element ekliyoruz.

```html
<div id="scene"></div>
```

Şimdi [src/index.css](./src/index.css) dosyasını açıp tüm _body_ elementinin [Matrix Code NFI](https://www.cufonfonts.com/font/matrix-code-nfi) fontuna sahip olmasını sağlayabiliriz.

```css
@font-face {
  font-family: 'Matrix Code NFI';
  font-style: normal;
  font-weight: normal;
  src: local('Matrix Code NFI'), url('matrix_code_nfi.woff') format('woff');
}
body {
  margin:0;
  padding: 0;
  background-color: #000;
  font-family: 'Matrix Code NFI';
  font-size: 3em;
  overflow: hidden;
}
```

Ayrıca [src/index.css](./src/index.css) dosyası içerisinde _keyframe_ animasyonumuzu tanımlıyor, `.fall-down` classına sahip olan elementlere bu animasyonu uyguluyoruz.

```css
@keyframes fall-down {
  from {
    transform: translateY(-2em);
  }
  to {
    transform : translateY(100vh);
  }
}
.fall-down {
  animation: fall-down 3s linear forwards;
}
```

Artık [src/index.ts](./src/index.ts) dosyasını oluşturabilir, `createRunDownColumn()` methodu ile sütunları, `createRunDownAnimation()` methodu ile de animasyonları geliştirebiliriz.

[.editorconfig](./.editorconfig) dosyası aracılığıyla bu projeyi geliştiren yazılımcıların aynı editor ayarları ile (_space/tab_, _satır-sonu-karakteri_, vs) çalışmasını sağlıyoruz.

[tsconfig.json](./tsconfig.json) dosyasında `compilerOptions.outDir` özelliğine `./dist` değerini veriyoruz, böylece [webpack](https://webpack.js.org/) derleme yaptığında derlenmiş dosyalar `./dist` dizininde oluşturulacak.

[webpack.config.js](./webpack.config.js) dosyası içerisinde `plugins` dizisine eklediğimiz

* [CopyWebpackPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/) ile, belirttiğimiz uzantılara sahip dosyaların kopyalanmasını
* [HtmlMinifierPlugin](https://www.npmjs.com/package/html-minifier-webpack-plugin) ile, `html` dosyalarının sıkıştırılmasını
* [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) ile, `ts` dosyalarının derlenmesi ile ortaya çıkan `bundle.js` dosyasının [index.html](./src/index.html) dosyasına eklenmesini

sağlıyoruz.

[HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) _plugin_'inin [hash](https://github.com/jantimon/html-webpack-plugin#options) özelliği ile derlenen `js` dosyasının [index.html](./src/index.html) içerisine `bundle.js?{HASH}` şeklinde eklenmesini sağlıyoruz.

Multi-Layered ve Multi-Staged [Dockerfile](./Dockerfile) sayesinde projeyi önce [node:12.11.1](https://hub.docker.com/_/node/) _image_'ında derliyoruz, sonra derlenmiş tüm dosyaları [nginx:1.17.0-alpine](https://hub.docker.com/_/nginx/) _image_'ına taşıyıp yayına alıyoruz.

Böylece yaklaşık _20MB_ civarında boyut kaplayan bir _Docker Image_'ımız oluyor.

![Sample Screenshot](https://media.giphy.com/media/Yr0U11wGZk5wqnQePt/giphy.gif "Sample Screenshot")

# en

Matrix style rundown

You can use the running version of this project at [https://polatengin-rome.netlify.com/](https://polatengin-rome.netlify.com/)

The reasons I made this project;

* To inject _javascript_ and _css_ into an _html_ page by configuring [Webpack](https://github.com/webpack/webpack) and [PostCSS](https://github.com/postcss/postcss)

* To understand the steps of loading and using a custom font to a web page

* Create and run a pipeline with [GitHub Actions](https://github.com/features/actions)

* Gain the habit of project development within [VS Code DevContainer](https://code.visualstudio.com/docs/remote/containers)

* Develop _keyframe_ animations with CSS

Technologies I used in this project are;

* Typescript
* WebPack
  * PostCSS
* GitHub Actions
* Docker
* Netlify
* DevContainers

To create the project, let's run the following command in an empty directory

```bash
npm init --force
```

First of all we're creating [src/index.html](./src/index.html) file and we're going to add a _div_ element in it with `scene` _id_ value.

```html
<div id="scene"></div>
```

Now we can create [src/index.css](./src/index.css) file and make all _body_ element has [Matrix Code NFI](https://www.cufonfonts.com/font/matrix-code-nfi) as font.

```css
@font-face {
  font-family: 'Matrix Code NFI';
  font-style: normal;
  font-weight: normal;
  src: local('Matrix Code NFI'), url('matrix_code_nfi.woff') format('woff');
}
body {
  margin:0;
  padding: 0;
  background-color: #000;
  font-family: 'Matrix Code NFI';
  font-size: 3em;
  overflow: hidden;
}
```

Also we're defining _keyframe_ animation in the [src/index.css](./src/index.css) file, and we're applying the animation to all elements that has `.fall-down` css class.

```css
@keyframes fall-down {
  from {
    transform: translateY(-2em);
  }
  to {
    transform : translateY(100vh);
  }
}
.fall-down {
  animation: fall-down 3s linear forwards;
}
```

Now, we can create [src/index.ts](./src/index.ts) file, and with `createRunDownColumn()` method we can create columns, with `createRunDownAnimation()` method we can add rundown animations in columns.

Also we're providing the same editor settings to the developers (_space/tab_, _end-of-line-character_, etc.) with the [.editorconfig](./.editorconfig) file.

In the [tsconfig.json](./tsconfig.json) file, we give the `compilerOptions.outDir` property a value of `./dist`, so that when the [webpack](https://webpack.js.org/) compiles, the compiled files will be created in the `./dist` folder.

We added the following `plugins` into the [webpack.config.js](./webpack.config.js) file

* With [CopyWebpackPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/), we can copy files based on their extensions

* With [HtmlMinifierPlugin](https://www.npmjs.com/package/html-minifier-webpack-plugin), we can compress the html files

* With [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/), the `bundle.js` file that is generated by compiling the `ts` files, and it's added into the [index.html](./src/index.html) file

Also, with the [hash](https://github.com/jantimon/html-webpack-plugin#options) option of the [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) plugin, we added the compiled ts files into the [index.html](./src/index.html) as `bundle.js?{HASH}`.

Thanks to Multi-Layered and Multi-Staged [Dockerfile](./Dockerfile), we compile the project in [node:12.11.1](https://hub.docker.com/_/node/) _image_, then move all compiled files to [nginx:1.17.0-alpine](https://hub.docker.com/_/nginx/) _image_ and expose them.

At the end we have a _Docker Image_ that takes about _20MB_ in size.

![Sample Screenshot](https://media.giphy.com/media/Yr0U11wGZk5wqnQePt/giphy.gif "Sample Screenshot")
