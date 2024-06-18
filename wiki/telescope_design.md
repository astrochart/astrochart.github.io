---
id: telescope-construction
---
Telescope Construction
=====
A radio telescope is a light bucket connected to an amplifier, mixer, and digitizer. The Default CHART setup is a horn
type collector connected to an amplifier which is read out by a software defined radio operated by a computer. The
computer records a radio spectrum which must be calibrated in a post-processing step. This guide explains the
construction steps.  Other pages describe how to observe and reduce your data.


Here is a summary of the beginner CHART setup.
![system setup](assets/new_tele_hook_up.png){:height="50%" width="50%"}


Here is a simulation of how the horn responds as a function of angle. The horn sees everything within a 20 degree patch of the sky
simultaneously. That is not very good resolution! But the galaxy is big.
![horn](assets/opt_horn.png){:height="50%" width="50%"}


## Horn construction
Materials
 - Heavy Duty Cardboard: 90 x 113cm (2 pieces)
 - Heavy Duty Cardboard: 70 x 115cm (2 pieces)
 - one roll heavy duty aluminum foil
 - Aluminum foil tape (aluminum duct tape)
 - hot glue
 - a pencil
 - meter stick
 - box cutter

 

Using the drawing below, cut out the four sides of the horn. Remember, "Measure twice, cut once"! Trace out each horn
and double check everything. Warning! Be careful not to damage any lovely old floors. Cut outside or put down something
to protect that parquet.


![horn dimensions](assets/horn_dimensions.jpg){:height="50%" width="50%"}

Next, line the cardboard pieces with the aluminum foil. Only cover the sides that will end up on the inside when the
horn is assembled. In theory it doesn't matter which
side is covered since cardboard is invisible in the radio, but in practice the foil is fragile. 

Assemble the horn pieces. Use hot glue to connect the edges together. Fold the waveguide edges shown in the schmeatic
above so that it creates a box on the bottom of the horn. Leave one side of the waveguide un-glued so you can install the feed point in the next step.

Line the inside edges of the horn with aluminum tape. This will join your 4 seperate sides into one continuous piece of
metal and make a much more effective horn.

Here is a completed horn!
![Completed Horn](assets/chart.png){:height="50%" width="50%"}

### Add the Probe
The probe is the focal point of the horn. This is where we connect our radio!  It is a small length of wire soldered to an RF
connector mounted to a piece of sheet metal. The RF connector is plugged directly into a low noise amplifier and
passband filter.

### Probe Materials
Individual Pieces
- 1: SMA Coaxial Panel Mount Connector with Bulkhead Nut and Solder Cup
- 1: Gold plated locking washer
- 1: 7.5cm by 3.5cm Aluminum plate. Preferably .05" thick. (Soup can lid or scrap metal)
- 1: SMA Male to Female Right Angle 90-Degree Adapter Gold Plated
- 1: Bias-T Enabled LNA/Filter
- 1: 6.3cm Copper wire
- Packages from Online
- [Wlaniot SMA Female Connector SMA Coaxial Panel Mount Connector with Bulkhead Nut and Solder Cup Terminal 5pcs](https://www.amazon.com/gp/product/B078H4F8R6)
- [SMA Connectors](https://www.amazon.com/gp/product/B07FDHBS19)
- [SMA Right Angle
  Connectors](https://astrochart.github.io/website/hardware.html#:~:text=SMA%20Right%20Angle%20Connectors)
- [LNA/Filter](https://astrochart.github.io/website/hardware.html#:~:text=Angle%20Connectors%0A%2D-,LNA/Filter,-%2D%206.3cm%20Copper)
- [6.3cm Copper
  wire](https://www.amazon.com/Beadalon-Artistic-22-Gauge-Copper-15-Yards/dp/B003IUG1PM/ref=sr_1_14?keywords=copper+wire&qid=1565206756&s=gateway&sr=8-14)

NOTE BENE!: Material availability changes with time and more often then not things can be done better than we've done
here.  Try new materials! Let us know what works better.

![materials](assets/materials.png){:height="50%" width="50%"}

### Make the Probe
Use a 1/4" drill bit to drill a hole in the middle of the plate/soup can lid. Plug the connector into this hole. Solder the copper wire to the solder cup.
 

### Install the probe
 Drill a
1/4" hole into the wide side of the waveguide which has been glued down. Put the hole on center line about 7cm up from
the bottom.
![probe soldered](assets/solder.png){:height="50%" width="50%"}

*Note: remember how we set aside the small back panel piece? We did that to make it easy to reach through that opening
of the horn and carry out these next steps.*



Connect the probe parts to the inside of the waveguide:

1. Remove the gold nut and one of the gold locking washers from the SMA mount connector.
1. Put the SMA connector section of the copper wire hook up through the aluminum plate.
1. Place the gold locking washer and gold nut on top of the SMA on the other side of the aluminum plate in that order.
Refer to the attached images.

   ![probe installation](assets/metal_visual_aide.png){:height="50%" width="50%"}


   ![probe installed on mounting plate](assets/bottom_of_plate.png){:height="50%" width="50%"}

4. Push the SMA from the inside through the cardboard hole so the metal plate is on the inside of the horn.
Hot Tip #4:Use a pencil or similar instrument to widen the hole slightly after drilling. This will make screwing in the 90 degree connector much easier.
5. Use foil tape to secure the metal plate and keep the inside of the horn completely reflective.
6. Screw on the male to female 90 degree SMA connector from the outside of the horn.
7. Screw on the male to male SMA connector to the 90 degree connector.

Your horn is now ready for astronomy!


## Data Capture Computer 

A computer is needed to record data from the radio.  Here we describe how to make a dedicated raspberry pi setup. You
can also use a laptop. We use a pi because it is cheaper and easier to maintain. z



### Materials
 - Raspberry Pi 4
 - Micro SD Card (32GB)
 - RTL-SDR
 - A computer monitor
 - Keyboard



### Burn your Micro SD Card
We provide a ready to run SD card image which can get you started. 

1. Download the latest [CHART Pi image](https://galileo.sese.asu.edu/chart/).
2. Use an SD card burner to write the image to an SD card. We like [Balena Etcher](https://etcher.balena.io/).
### Set up your RPi
To get started, we need to make sure that all our wires are hooked up and ready to go.

 - Set up your Pi with monitor, keyboard, and power source
 - install sd card and turn on the Pi
 - navigate to the WiFi setup screen and log in to your local wifi (this is a nice to have, but not required for data
   taking)
 
![pi setup](assets/rasp_set_up.jpeg){:height="50%" width="50%"}

### Test your setup

Open a terminal and run `gui.py`. Success will look like a window opening with some boxes asking for input. 


You are now ready to do astronomy.

## Observing setup
Here is how observing will go
 - Plug the RTL-SDR into the Pi 
 - Connect the horn amplifier to the RTL
 - Point the horn at your favorite part of the sky!
 - Remember: Science (and hell) is repetition. And if you don't write it down, you're just fooling around!
 - Don't forget, you can observe in the day or night time. Whenever you want!
 - For more details, see [Observing](Observing)

