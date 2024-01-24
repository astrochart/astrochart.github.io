
var jsondata=[
  
    {
      "title"    : "Example Post",
      "category" : "",
      "tags"     : "",
      "url"      : "CHART2/assets/blog/posts/2020/01/01/example-post.html",
      "date"     : "2020-01-01 00:00:00 -0700",
      "content"  : "{% if site.search_engine == \"js\" %}\nvar jsondata=[\n  {% for post in site.posts %}\n    {\n      \"title\"    : \"{{ post.title | escape }}\",\n      \"category\" : \"{{ post.category }}\",\n      \"tags\"     : \"{{ post.tags | join: ', ' }}\",\n      \"url\"      : \"{{ site.baseurl }}{{ post.url }}\",\n      \"date\"     : \"{{ post.date }}\",\n      \"content\"  : {{ page.content | jsonify }}\n    } {% unless forloop.last %},{% endunless %}\n  {% endfor %}\n  ,\n  {% for page in site.html_pages %}\n   {\n     {% assign title = page.title | default: page.name %}\n     {% if title != nil %}\n        \"title\"    : \"{{ title | escape }}\",\n        \"category\" : \"{{ page.category }}\",\n        \"tags\"     : \"{{ page.tags | join: ', ' }}\",\n        \"url\"      : \"{{ site.baseurl }}{{ page.url }}\",\n        \"date\"     : \"{{ page.date }}\",\n        \"content\"  : {{ page.content | jsonify }}\n     {% endif %}\n   } {% unless forloop.last %},{% endunless %}\n  {% endfor %}\n];\n\nvar sjs = SimpleJekyllSearch({\n    searchInput: document.getElementById('search-input'),\n    resultsContainer: document.getElementById('results-container'),\n    json: jsondata,\n    searchResultTemplate: '<li><a href=\"{url}\" title=\"{desc}\">{title}</a></li>',\n    noResultsText: 'No results found',\n    limit: 10,\n    fuzzy: false,\n    exclude: []\n  })\n{% endif %}\n\n"
    } 
  
  ,
  
   {
     
     
        "title"    : "The Completely Hackable Amateur Radio Telescope",
        "category" : "",
        "tags"     : "",
        "url"      : "CHART2/main_page",
        "date"     : "",
        "content"  : "<h1 id=\"the-completely-hackable-amateur-radio-telescope\">The Completely Hackable Amateur Radio Telescope</h1>\n<p>Welcome to the CHART project! CHART stands for Completely Hackable Amateur Radio Telescope. Our goal with this project is to create an easy to navigate system of tutorials that will lead to you in building your own radio telescope from the comfort of your home or classroom. It is very important to us that that radio astronomy is as accessible as possible to whoever is interested, so we strove to keep the creation of this project as cheap as possible. We are excited that you have found our project and wish you the best of luck in the creation of your radio telescope. The following video gives you a brief overview of the creation of the project.</p>\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/XAxNngnJvUI\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen=\"\"></iframe>\n\n<h1 id=\"build-your-own-radio-telescope\">Build your own Radio Telescope</h1>\n<p>Let’s get started! We have desiged a series of tutorials that will guide you step-by-step in creating your own radio\ntelescope. When it comes to navigating this project, we recommend that users start in the <a href=\"telescope_design.html\">Telescope\nDesign</a> section, so that you will have a telescope to take data with, then move onto the software section of the course to record the data you will be taking.</p>\n\n"
     
   } ,
  
   {
     
     
        "title"    : "404.html",
        "category" : "",
        "tags"     : "",
        "url"      : "CHART2/404.html",
        "date"     : "",
        "content"  : "<!--- this file is needed for automatic creation of non existent pages --->\n"
     
   } ,
  
   {
     
     
        "title"    : "index.html",
        "category" : "",
        "tags"     : "",
        "url"      : "CHART2/assets/blog/",
        "date"     : "",
        "content"  : "<!--- this file is needed for automatic creation of blog page --->"
     
   } ,
  
   {
     
     
        "title"    : "Contact",
        "category" : "",
        "tags"     : "",
        "url"      : "CHART2/about",
        "date"     : "",
        "content"  : "Contact\n===\n\nThis project is a collaboration between ASU and Winona State. Join us! \n\n<ul>\n<li>Adam Beardsley (Winona State Assistant Professor): adam.beardsley@winona.edu\n<li>Danny Jacobs (Arizona State Assistant Professor): daniel.c.jacobs@asu.edu\n<li>Lindsay Berkhout (Arizona State PhD Student and local CHART lead): lmberkhout@asu.edu\n"
     
   } ,
  
   {
     
     
        "title"    : "Telescope construction",
        "category" : "",
        "tags"     : "",
        "url"      : "CHART2/telescope_design",
        "date"     : "",
        "content"  : "Telescope construction\n=====\nA simple radio telescope consists of a collecting element, amplifier, mixer, and digitizer. Here is a drawing of how it\nall goes together.\n\n![system setup](assets/new_tele_hook_up.png){:height=\"50%\" width=\"50%\"}\n\n## Horn and Waveguide\nIn our Low Frequency Cosmology lab at Arizona State University, we used top of the line software to optimize our telescope horn to observe the 21 cm line.\n\n![horn](assets/opt_horn.png){:height=\"50%\" width=\"50%\"}\n\nThis image shows our final optimized dimesions for the horn according to highest gain.\n\n\nWe tried many shapes and designs, but found that the parameters listed below worked best for us. As always, we encourage you to test your own design, but for ease in this project you can use the template we provide.\n\n## Horn construction\nThe picture below shows the horn dimensions that will be cut out on the cardboard sheets. Make sure to sketch out your deign with a pencil and follow the saying, \"Measure twice, cut once\" to ensure your dimensions are as accurate as possible.\n\n![horn dimensions](assets/horn_dimensions.jpg){:height=\"50%\" width=\"50%\"}\n\nNext, we need to line the cut out cardboard pieces with the aluminum foil. We only need the inside of the horn to be covered with foil, since that's the part where all of the light particles will be focused into. Therefore, only one side of each piece needs to be covered.\n\nHot Tip #1: Make sure no adhesive or tape is exposed on the foil side because this will bring the horn's reflectivity\ndown. This can be accomplished by going over any exposed spots with foil tape.\n\nNext we will need to use our hot glue gun to glue the edges of the horn together. Make sure to fold the waveguide edges shown in the schmeatic above so that it creates a box on the bottom of the horn.\n\nHot Tip #2: Don't glue the back panel onto the horn quite yet. Set this aside for later to make the process of hooking up the electrical components easier.\n\nHot Tip #3: You can use any method you're comfortable with to connect the cardboard pieces. It's a little easier to have a partner help to ensure stability, but it can be done with just your own steady hand. One option is to let the hot glue set overnight between each panel, but doing all four sides at once works just as well - especially if you have a time constraint.\n\nNow that all the pieces are glued together, we took our aluminum tape and lined the inside edges of the horn with it so that no glue was showing. Again we want a completely reflective and conductive surface so that energy transfer from the photons and electrons can effectively travel to the waveguide and probe.\n\nBelow is a photo of what your horn will look like constructed.\n![Completed Horn](assets/chart.png){:height=\"50%\" width=\"50%\"}\n\n### Add the Probe\nNow that you have a horn that focuses light lets add a pickup to send the energy into a wire.\n\n### Probe Materials\nFor this section you can either buy the pieces individually or in packages online for more convenience.\nIndividual Pieces\n- 1: SMA Coaxial Panel Mount Connector with Bulkhead Nut and Solder Cup\n- 1: Gold plated locking washer\n- 1: 7.5cm by 3.5cm Aluminum plate. Preferably .05\" thick. (Soup can lid or scrap metal)\n- 1: SMA Male to Female Right Angle 90-Degree Adapter Gold Plated\n- 1: Bias-T Enabled LNA/Filter\n- 1: 6.3cm Copper wire\n- Packages from Online\n- [Wlaniot SMA Female Connector SMA Coaxial Panel Mount Connector with Bulkhead Nut and Solder Cup Terminal 5pcs](https://www.amazon.com/gp/product/B078H4F8R6)\n- [SMA Connectors](https://www.amazon.com/gp/product/B07FDHBS19)\n- [SMA Right Angle\n  Connectors](https://astrochart.github.io/website/hardware.html#:~:text=SMA%20Right%20Angle%20Connectors)\n- [LNA/Filter](https://astrochart.github.io/website/hardware.html#:~:text=Angle%20Connectors%0A%2D-,LNA/Filter,-%2D%206.3cm%20Copper)\n- [6.3cm Copper\n  wire](https://www.amazon.com/Beadalon-Artistic-22-Gauge-Copper-15-Yards/dp/B003IUG1PM/ref=sr_1_14?keywords=copper+wire&qid=1565206756&s=gateway&sr=8-14)\n\nNOTE BENE!: Material availability changes with time and more often then not things can be done better than we've done\nhere.  Try new materials! Let us know what works better.\n\n![materials](assets/materials.png){:height=\"50%\" width=\"50%\"}\n\n### Make the Probe\nUse a 1/4\" drill bit to drill a hole in the middle of the aluminum plate. Our SMA connector is going to fit right into this hole, and the aluminum plate is used to stabilize it Otherwise, the cardboard alone would be too flimsy. Drill a 1/4\" hole into one of the wide sides of the waveguide 7cm down from the edge in the center. Next, we will need to solder the copper wire to the solder cup.\n\n![probe soldered](assets/solder.png){:height=\"50%\" width=\"50%\"}\n\n*Note: remember how we set aside the small back panel piece? We did that to make it easy to reach through that opening\nof the horn and carry out these next steps.*\n\n\n\nConnect the probe parts to the inside of the waveguide:\n\n1. Remove the gold nut and one of the gold locking washers from the SMA mount connector.\n1. Put the SMA connector section of the copper wire hook up through the aluminum plate.\n1. Place the gold locking washer and gold nut on top of the SMA on the other side of the aluminum plate in that order.\nRefer to the attached images for visual assistance.\n\n\n\n   ![probe installation](assets/metal_visual_aide.png){:height=\"50%\" width=\"50%\"}\n\n\n   ![probe installed on mounting plate](assets/bottom_of_plate.png){:height=\"50%\" width=\"50%\"}\n\n4. Push the SMA from the inside through the cardboard hole so the metal plate is on the inside of the horn.\nHot Tip #4:Use a pencil or similar instrument to widen the hole slightly after drilling. This will make screwing in the 90 degree connector much easier.\n5. Use foil tape to secure the metal plate and keep the inside of the horn completely reflective.\n6. Screw on the male to female 90 degree SMA connector from the outside of the horn.\n7. Screw on the male to male SMA connector to the 90 degree connector.\n\n## Data Capture Computer \n\nA computer is needed to record data from the radio.  Here we describe how to make a dedicated raspberry pi setup. You\ncan also use a laptop. We use a pi because it is cheaper and easier to maintain. In these instructions we will cover\nevery step needed when beginning from a bare Pi.\n\n\n\n\n### Materials\n - Raspberry Pi 4\n - Micro SD Card (32GB)\n - RTL-SDR\n - A computer monitor\n - Keyboard\n - Ethernet cable\n - Radio antenna\n - Personal computerRaspberry Pi 4\n - Micro SD Card (32GB)\n - RTL-SDR\n - A computer monitor\n - Keyboard\n - Ethernet cable\n - Radio antenna\n - Personal computer\n\n### Imaging the Micro SD Card\nThe Pi runs off a solid state SD card.  The easiest way to install the operating system is to use another computer to\nput the complete OS onto an SD card. \n1. On a laptop or desktop, install the [Pi imager](https://raspberrypi.com/software/). \n   ![Pi Imager](assets/PiImager.png){:height=\"50%\" width=\"50%\"}\n2. Click on CHOOSE OS and select the first option _Raspbery Pi OS (32-bit)_\n   ![OS Option](assets/OSOption.png){:height=\"50%\" width=\"50%\"}\n3. Click on CHOOSE STORAGE and click on the first option that has the SD card.\n4. After the writing process is done, safely eject your micro SD card and insert it into your Raspberry Pi.\n   ![sd card](assets/sdcard.jpeg){:height=\"50%\" width=\"50%\"}\n\n### Setting up your RPi\nTo get started, we need to make sure that all our wires are hooked up and ready to go.\n\n - Hook up your Raspberry Pi to your monitor.\n - Plug in your ethernet cable.\n - Hook up to your keyboard (we used a wireless hook up for ours).\n - Plug in your Raspberry Pi into a power source.\n \n![pi setup](assets/rasp_set_up.jpeg){:height=\"50%\" width=\"50%\"}\n\nMake sure all connections we set up in the beginning of the tutorial are still in place so that our system will start up on the monitor screen. The system will now prompt you to choose your location settings, and to set a username and password. Once this set up process is complete, it will check for updates.\n\n### System Updates\nThe Ubuntu system will now scan for updates. Click Next to update and Restart once it prompts you to.\n\n### Computer help!\nWe will make moderate use of the linux command line terminal. Through the terminal we can do all the usual things we do\nn a computer like inspect the contents of directories, manage files, and run programs. The terminal itself is a program\ncalled Bash (which is a portmanteu of Bourne Again SHell). If this is your first time in the shell, check out our\n[linux shell🐢 help page](shell_help).  \n\nWe were all n00bs once! See a bit slang you don't recognize? Consult our modest [compendium of computer\nvocabulary](assets/vocab).  Or just, you\nknow, google it!\n\n\n### Install Gnu Radio\n[GNU Radio](https://www.gnuradio.org/about/) is the free open source software that we will be using to help us process our data.\n Make sure that you have an internet connection for these next steps. We used an ethernet hook up to ensure that we had\n an internet connection, but you can also hook up to wifi if available. To install gnuradio on Ubuntu, open up your\n terminal run the following command:\n\n`sudo apt install gnuradio-dev gr-osmosdr librtlsdr-dev build-essential git cmake`\nIt will ask you to continue after using a certain amount of disk space.\nType: Y and click enter\nThis download might take up to 20 mins.\n\n\n"
     
   } ,
  
   {
     
     
        "title"    : "redirect.html",
        "category" : "",
        "tags"     : "",
        "url"      : "CHART2/",
        "date"     : "",
        "content"  : ""
     
   } 
  
];

var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: jsondata,
    searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
    noResultsText: 'No results found',
    limit: 10,
    fuzzy: false,
    exclude: []
  })


