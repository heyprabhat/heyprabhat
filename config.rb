#!/usr/bin/env ruby


# ----------------
# heyprabhat®
# ----------------
# Hey Prabhat — A Personal Writings.
# ___________________________________________________________________________
#
# Architecture and Code Handcrafted by Prabhat Kumar.
# Architectuur en Code handgemaakt door Prabhat Kumar.
# @author    : Prabhat Kumar [http://prabhatkumar.org/].
# @copyright : Prabhat Kumar [http://prabhatkumar.org/].
# @copyright : Sequømics Research [http://research.sequomics.com/].
# @copyright : Sequømics Corporation [http://sequomics.com/].
# ___________________________________________________________________________
#
# @date      : 09-Aug-2018
# @license   : Apache, version 2.0
# @require   : Ruby
# @require   : Sass
# @require   : Compass
# @build     : SEED™ — Umeå
#              └────── A Sequømics Product — http://sequomics.com/.
# ___________________________________________________________________________

# ___________________________________________________________________________
#
# Usage: $ compass init
# ___________________________________________________________________________

# -------------------------------------- //
#                  ~   ~                 //
#                 (.) (.)                //
#                    -                   //
#                  `\^/`                 //
#        @author : Prabhat Kumar         //
#          @date : 04-Sept-2016          //
# -------------------------------------- //

# Sass - (3.4.21)     : Selective Steve
# Compass - (v1.0.3)  : Polaris

# Require compass plugin:
require 'compass/import-once/activate'

# Setting the root path of project:
http_path       = "/"
css_dir         = "core/source/style"
sass_dir        = "core/source/scss"
images_dir      = "core/source/images"
javascripts_dir = "core/source/script"

# Preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style    = :expanded

# To enable relative paths to assets via compass helper functions:
relative_assets = true

# To disable debugging comments that display the original location of the selectors:
# options: true || false
line_comments   = true

# ___________________________________________________________________________
# Preference for the indented syntax, to regenerate this project again,
# Pass: --syntax sass, or uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

# Usage: $ compass version
# ------------------------
# Usage: $ compass compile
# Usage: $ compass watch
# ------------------------
# Usage: $ compass compile --production
# Usage: $ compass compile --sourcemap
# //——————————————EOF——————————————//-
