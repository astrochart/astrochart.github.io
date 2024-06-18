---
id: resources
---
Resources
===
### Computer help!
We will make moderate use of the linux command line terminal. Through the terminal we can do all the usual things we do
n a computer like inspect the contents of directories, manage files, and run programs. The terminal itself is a program
called Bash (which is a portmanteu of Bourne Again SHell). If this is your first time in the shell, check out our
[linux shell🐢 help page](shell_help).  

We were all n00bs once! See a bit slang you don't recognize? Consult our modest [compendium of computer
vocabulary](assets/vocab).  Or just, you
know, google it!


### Install Gnu Radio
[GNU Radio](https://www.gnuradio.org/about/) is the free open source software that we will be using to help us process our data.
 Make sure that you have an internet connection for these next steps. We used an ethernet hook up to ensure that we had
 an internet connection, but you can also hook up to wifi if available. To install gnuradio on Ubuntu, open up your
 terminal run the following command:

`sudo apt install gnuradio-dev gr-osmosdr librtlsdr-dev build-essential git cmake`
It will ask you to continue after using a certain amount of disk space.
Type: Y and click enter
This download might take up to 20 mins.

