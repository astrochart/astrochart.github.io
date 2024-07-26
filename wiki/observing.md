---
id: observing
---
Observing
===

## Planning

If you've followed the telescope setup tutorial, you will now have a system that is ready to observe. The first step is to make a plan of where to point your CHART horn. You will need to know when the galaxy is visible in your location. Different parts of the Milky Way will be visible from different locations on Earth, depending on the time. The image below shows an artist's rendition of the Milky Way, as would be viewed from above. The galaxy is divided into units of "Galactic Longutude", with the center of the coordinate system at the sun. There are four Quadrants of Galactic longitude (I: 0 degrees to 90 degrees, II: 90 degrees to 180 degrees, III: 180 degrees to 270 degrees, IV: 270 degrees to 360 degrees). The II galactic quadrant is mostly only visible from the northern hemisphere, while the IV galactic quadrant is mostly only visible from the southern hemisphere. If you would like to make a rotation curve, only the I and IV quadrants are usable due to the geometry of the method we will use to calculate the rotation curve. This will be explained further in the analysis section. If you are just interested in detecting the 21-cm signal, you can point at any part of the galaxy you like.

![MW](assets/artistsrendition.jpg){:height="75%" width="75%"}

Image Credit: NASA/JPL-Caltech/ESO/R. Hurt - http://www.eso.org/public/images/eso1339e/

There is also the consideration of Galactic latitude, or how far out of the disk of the Galaxy you are pointed. It is best to point as close to the plane of the Galaxy as possible, but the hydrogen distribution in the disk extends out to high galactic latitudes, so if you are
slighly off you should still be able to see the 21-cm signal. Galactic latitude is demonstrated below:

![GL](assets/GL.jpg){:height="75%" width="75%"}

Image Credit: https://astronomy.ua.edu/undergraduate-program/course-resources-astronomy/lab-exercise-8-cosmic-distributions-and-the-galactic-ecology/1293-2/

To figure out where the galaxy is located at your location and time, we reccomend using something like [Stellarium](https://stellarium.org/).
The Stellarium app or web browser will show what is in the sky at your location. We demostrate here with Stellarium web. Here is a quick view of the interface:

![stell](assets/stellarium.png){:height="75%" width="75%"}

Make sure to change the location to your current location. We reccomend turning off the atmosphere with the button labelled "atmosphere" at the bottom. This will let you see where the Galaxy is during the day time as well as the night time. Fortunately, unlike optical astronomy, we can do radio measurements of the Milky Way during the day!

![stell](assets/atmosphere.png){:height="75%" width="75%"}

Using the bottom right button to scan through times, you can see when the Galaxy is visible from your location. It should pass overhead twice in a 24 hour period.

![stell](assets/timescan.png){:height="75%" width="75%"}

To check what part of the Galaxy you are seeing, you can click on an object within the galactic plane to get the RA and DEC (what we call "Celestial coordinates", see [here](https://skyandtelescope.org/astronomy-resources/right-ascension-declination-celestial-coordinates/#:~:text=Like%20cities%2C%20every%20object%20in,as%20the%20object's%20celestial%20coordinates.) or the analysis tutorial for more information and then put it into a converter like [this one](https://www.astrouw.edu.pl/~jskowron/ra-dec/) to get the galactic coordinates. Galactic l is the longitude, galactic b is the latitude. Here, we have clicked the object "Caph" which is within the plane of the Milky Way that we can see.

![stell](assets/altaz.png){:height="75%" width="75%"}

The other thing to consider is how many measurements to take. We have a resolution on the sky limited by the beam of the telescope, which is 25 degrees. This means that if you point at the galaxy at one set of coordinates, and then move say 10 degrees of galactic longitude later, there will be significant overlap in the gas collected, as there will be a 15 degree swath that is included in both measurements. If you want to scan the whole first quadrant, for example, it is reccomended to do it in steps of no smaller than 15 degrees.

Turn on the azimuthal grid next to the atmosphere button, and look at what Altitude and Azimuths you want to observe. These will guide you when you're observing outdoors. You can use the same trick of clicking an object to get the exact Alt/Az. When you go out to observe, you can use a phone compass and either a protractor or phone angle meter to figure out where to point the horn. The Azimuth should be findable with your compass, and the Altitude with the angle meter. You may need to bring something to prop your horn up with if you're holding it at an angle.

## Setup

Now, you're ready to observe outside!
The steps to set up your telescope are described below, and we also link to printable documents for convenience in the field.
We recommend doing a practice setup in the comfort of your house/classroom/lab before heading out to the field.
This setup assumes our baseline design outlined in the [Telescope Construction](telescope_design.html) tutorial.

[The CHART Procedure document](memos/CHART_procedure.pdf) describes the setup and data taking steps.

[The CHART observing sheet](memos/IntheFieldObservingForm.pdf) provides a handy template for keeping an observing log.

[Here](memos/PrintableProtocol.pdf) is a printable version of the procedure document if you'd like to have one handy.

### Packing List
Essentials:
- Horn
- Amplifier and filter
- RTL-SDR and SMA cable
- Raspberry pi, mouse, USB-C cable for power
- Monitor, HDMI cable, USB micro cable for power
- Battery
- Tape, aluminum tape, foil
- Notebook, pen, [observing sheets](memos/IntheFieldObservingForm.pdf)
- Phone (for determining pointing)
If needed and available:
- RF Explorer
- Table
- Garden stakes, lawn chair, boxes for propping up horn
- Tarp (to stay dry on wet grass)

### Assembly

- Place telescope on ground.
- Connnect the Nooelec amp and filter onto the horn by twisting the bolt.
![connect filter](assets/setup/nooelec_connection.png)
- Connect the Noelec amp and filter to the RTL-SDR using the SMA cable.
![connect radio](assets/setup/radio_connection.png)
- Plug the RTL-SDR into the Raspberry Pi USB 2 port.
![radio to pi](assets/setup/radio_pi.png)
- Plug the mouse into the Raspberry Pi.
![mouse](assets/setup/mouse.png)
- Plug the small end of the HDMI cable into the Raspberry Pi and the large end into the monitor.
![HDMI](assets/setup/hdmi_connection.png)
- Plug the small end of the USB-C cable into the Raspberry Pi where the power symbol is, and the plug the large end into the battery.
![pi power](assets/setup/pi_power.png)
- Plug the small end of the USB micro B cable into the "power only" spot in the monitor, and the large end into the battery.
![monitor power](assets/setup/monitor_power.png)
- Once everything is plugged in, the screen should light up and the Pi should boot up.
- Point towards desired location on sky, use compass and level apps on phone to guide.
- Set to desired angle, using props to make sure the telescope remains at the same angle.
- Hold telescope throughout the data collection.

![setup](assets/setup.jpg){:height="75%" width="75%"}

## Taking Data
We created a GUI (Graphical User Interface) to make taking data easy.

- Open the CHART_GUI file on the Pi's desktop.
- Click "execute in terminal."
- Enter the parameters you want to use for taking data.
  - You can use all the default parameters by clicking the slider at the bottom.
If you do not change a value in a text area, the default parameter will be used as shown below.
  - Initial and final frequencies set the lowest and highest frequency tunings for your observation, in MHz.
  - Integration time sets how long the data is averaged, in seconds, for each data point.
  - Number of integrations is the number of time averaged data points per frequency tuning.
- The **Enable Bias-T** option should only be used if you know **for sure** that you are using a bias-T. If you are following this tutorial exactly, then Bias-T SHOULD be on. This is what turns on the LNA, which should have a bright white light on when taking data.
  - A [bias-T](https://en.wikipedia.org/wiki/Bias_tee) is a small bit of circuitry used to power an amplifier on the same cable as the radio signal.
  - If you are using the Nooelec filter and amplifier we recommend, then you do do have a bias-T and should enable this setting.
  - When you enable the bias-T you will see a warning message. You can close this window pop-up and continue once you confirm you do want it enabled.
- Write a short description explaining what you are looking at in the sky.
- Enter your username for Jupyter Hub, the location you are taking data, trial of the day in this location, date in the format month.day.year, and current time.
  - You can use system time if the time in the upper right corner of your screen is correct. You can also use it when you are connected to the internet.
- Click "Start."
  - You can stop the trial at any time by clicking "Stop."
  - Once "Start" is re-enabled, the data has been taken and you can now take more data.
