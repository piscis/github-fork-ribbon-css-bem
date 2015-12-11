# "Fork me on GitHub" SASS/BEM -> css ribbon

This is a recreation of the [Fork me on GitHub ribbon](https://github.com/blog/273-github-ribbons)
in CSS, hence resolution-independent.  

There is also a **[DEMO](http://piscis.github.io/github-fork-ribbon-css-bem/  )** with descriptions.

## Using "Fork me on GitHub" CSS ribbon with a CDN

CDN provided by [rawgit.com](https://rawgit.com)

#### Place this in the HEAD
```
<link rel="stylesheet" href="//cdn.rawgit.com/piscis/github-fork-ribbon-css-bem/v0.1.22/dist/gh-fork-ribbon-bem.min.css" />
<div class="gfr__wrapper gfr__wrapper--absolute gfr__wrapper--right-bottom">
  <div class="gfr__ribbon gfr__ribbon--white-black">
    <a class="gfr__link" href="https://github.com/piscis/github-fork-ribbon-css-bem">Fork me on GitHub</a>
  </div>
</div>
```

#### Place this in the BODY
```
<div class="gfr__wrapper gfr__wrapper--absolute gfr__wrapper--right-bottom">
  <div class="gfr__ribbon gfr__ribbon--white-black">
    <a class="gfr__link" href="#">Fork me on GitHub</a>
  </div>
</div>
```

For more information on how to integrate with bower, webpack or NPM visit the [demo](http://piscis.github.io/github-fork-ribbon-css-bem/)

Also visit the origin from which this project was forked: <https://simonwhitaker/github-fork-ribbon-css> 

Feel free to fork, tweak and send me a pull request.

Note: this project is not sponsored or in any way endorsed by GitHub.
