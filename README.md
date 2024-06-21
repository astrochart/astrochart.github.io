# Local debug notes
Install Ruby however is best for you. Living in maclandia I used the one that came with XCode. Brew is also good

in the root source directory astrochart.github.io run "bundle install" this should install all the necessary libararies
listed in the Gemfile

Solve any problems resulting from your badly configured ruby install. EG I found this page helpful
https://stackoverflow.com/questions/63729369/commonmarker-gem-cannot-be-installed-needed-for-jekyll-macos

Once everything is installed, tell jekyll to compile the page and start a local debug server

bundle exec jekyll serve

More clues about this process here
https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll


