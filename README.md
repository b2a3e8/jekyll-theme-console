# jekyll-theme-console

A jekyll theme with inspiration from linux consoles for hackers, developers and script kiddies.

<img src="https://raw.githubusercontent.com/b2a3e8/jekyll-theme-console/master/screenrec-dark.gif" width="550" title="Screenshot">

## Demo

[dark style](https://b2a3e8.github.io/jekyll-theme-console-demo-dark/) ([source code](https://github.com/b2a3e8/jekyll-theme-console-demo-dark)):

[<img src="https://raw.githubusercontent.com/b2a3e8/jekyll-theme-console/master/screenshot-dark.png" width="350" title="Screenshot">](https://b2a3e8.github.io/jekyll-theme-console-demo-dark/)


[light style](https://b2a3e8.github.io/jekyll-theme-console-demo-light/) ([source code](https://github.com/b2a3e8/jekyll-theme-console-demo-light)):

[<img src="https://raw.githubusercontent.com/b2a3e8/jekyll-theme-console/master/screenshot-light.png" width="350" title="Screenshot">](https://b2a3e8.github.io/jekyll-theme-console-demo-light/)


[hacker style](https://b2a3e8.github.io/jekyll-theme-console-demo-hacker/) ([source code](https://github.com/b2a3e8/jekyll-theme-console-demo-hacker)):

[<img src="https://raw.githubusercontent.com/b2a3e8/jekyll-theme-console/master/screenshot-hacker.png" width="350" title="Screenshot">](https://b2a3e8.github.io/jekyll-theme-console-demo-hacker/)


## Installation

First, follow the steps in [this Quickstart Guide](https://jekyllrb.com/docs/) if you're starting with Jekyll from scratch. Skip this if you already have an existing jekyll project.

**_You can also use the [demo site's source code](https://b2a3e8.github.io/jekyll-theme-console-demo-dark/) as template for an easy start._**

### Remote theme method for GitHub Pages

Use this method for sites hosted with GitHub Pages only. To install:

1. Set `remote_theme` in your project's Jekyll `_config.yml` file:

   ```yaml
   remote_theme: b2a3e8/jekyll-theme-console
   ```

### Gem-based method

With Gem-based themes, directories such as the `assets`, `_layouts`, `_includes`, and `_sass` are stored in the theme’s gem, hidden from your immediate view. Yet all of the necessary directories will be read and processed during Jekyll’s build process.

This allows for easier installation and updating as you don't have to manage any of the theme files. To install:

1. Add this line to your Jekyll site's `Gemfile`:

   ```ruby
   gem "jekyll-theme-console"
   ```

2. Fetch and update bundled gems by running the following [Bundler](http://bundler.io/) command:

   ```bash
   bundle
   ```

3. Set `theme` in your project's Jekyll `_config.yml` file:

   ```yaml
   theme: jekyll-theme-console
   ```

To update the theme run `bundle update`.

## Usage

### _config.yaml

In addition to jekyll's default configuration options, you can provide:
- `header_pages` to specify which pages should be displayed in navbar
- `footer` string, which will be inserted on the end of the page (doesn't support markup, but html)
- `google_analytics` tracking id (tracking will be enabled only in production environments and only if you set this option, no Google Analytics code will be loaded if you don't set this option)
- `listen_for_clients_preferred_style` boolean, used to allow users to choose light or dark style based on their preferences (mostly affected by OS dark or light theme, details see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- `style` to specify which predefined style (colors) should be used

```yaml
header_pages:
  - index.md
  - about.md

style: dark # dark (default), light or hacker
listen_for_clients_preferred_style: true # false (default) or true

footer: 'follow us on <a href="https://twitter.com/xxx">twitter</a>'

google_analytics: UA-NNNNNNNN-N
```

### front matter variables

Besides the predefined [front matter](https://jekyllrb.com/docs/front-matter/) variables from jekyll this theme also supports following variables:
- `title` to set a title for the page
- `lang` to specify the language, defaults to 'en'
- `robots` to control the robot meta tag ([details](http://longqian.me/2017/02/12/jekyll-robots-configuration/)) - this may be useful for example to set `NOINDEX` to tag pages

## Customization

If you want to customize this theme, follow this steps:
1. Fork this repository (you can use the fork as your own theme or directly as your website)
2. Create or modify files in `_layouts` directory for html-based changes
3. Create or modify files in `_sass` and `assets` for css-based changes
   - You can change things which are used in light and dark theme (like font-size) in `_sass/base.scss`. You'll find style variables at the top.
   - Style-specific definitions are in `_sass/_dark.scss` respectively in `_sass/_light.scss`. You can change things like background-color there.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/b2a3e8/jekyll-theme-console. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `jekyll-theme-console.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
