# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-console"
  spec.version       = "0.1.0"
  spec.authors       = ["b2a3e8"]
  spec.email         = ["b2a3e8@gmail.com"]

  spec.summary       = "A jekyll theme wich is inspired by linux consoles."
  spec.homepage      = "https://github.com/b2a3e8/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
