---
id: builds
---
Community Builds
===

Here are some stories from people who have built their own CHART. If you want us
to highlight your build, tell us about it by signing up for our
[Google Group](https://groups.google.com/u/1/g/astrochart/) and sending a summary, or
[email the project mentors directly](mailto:astrochartproject@gmail.com).

The map below shows locations of CHART builds.
In principle, combining many small telescopes spread out like this can result in a very powerful telescope with extremely high resolution.
The technique is called [long-baseline interferometry](https://en.wikipedia.org/wiki/Very-long-baseline_interferometry), and it's how radio astronomers were able to produce [images of black holes](https://www.jpl.nasa.gov/edu/resources/teachable-moment/how-scientists-captured-the-first-image-of-a-black-hole/).
The plot on the right is just for fun, showing all the telescope pairs for such a hypothetical interferometer.
Of course, this is far beyond the capabilities of CHART, and there are no (current) plans to do this.

<div style="display:flex; flex-wrap:wrap; justify-content:center; gap:1rem; margin:1rem 0;"><iframe src="https://www.google.com/maps/d/u/1/embed?mid=1tf58mb1arKZsweu0ZZLQyEQon6SK6y4&ehbc=2E312F&noprof=1" style="width:48%; min-width:300px; height:375px; border:0;"></iframe>
<img src="https://raw.githubusercontent.com/astrochart/chart-baselines-generator/main/assets/scripts/chart_baselines.png" style="width:48%; min-width:300px; max-height:375px; height:auto; object-fit:contain;" alt="CHART build baselines">
</div>


ARRL Teachers Institute
-----------------------
#### *Newington, CT, 2026*
![ARRL 1](assets/builds/arrl1.jpg){: style="float: left; width: 32%; padding-left: 2%;padding-bottom: 3%; min-width: 250px"}
![ARRL 2](assets/builds/arrl2.jpg){: style="float: left; width: 32%; padding-left: 2%; padding-bottom: 3%; min-width: 250px"}
![ARRL 3](assets/builds/arrl3.jpg){: style="float: left; width: 32%; padding-left: 2%; min-width: 250px"}
<div style="clear: both;"></div>
The [National Association for Amateur Radio](https://www.arrl.org/teachers-institute-on-wireless-technology) holds workshops for classroom teachers on various aspects of wireless technology.
The Space Comms & Radio Astronomy session started using CHART for their astronomy platform in 2025.
This year (2026) they held three sessions for a total of 22 teachers, who collectively built and tried out about ten CHART horns.
Their timing perfectly lined up with the release of our updated graphical user interface (GUI), so they were able to give a lot of useful feedback. Many of their suggestions have been implemented and will come with the next release.

The group probably holds the record for most intense interference environment, being located right next door to [W1AW](https://www.arrl.org/inside-w1aw), ARRL's primary radio station which regularly broadcasts bulletins, practice sessions, and guest operator time.
Nevertheless, they were able to work around the transmissions and troubleshoot a few loose connections to come out with some great data.

Petrified Forest National Park
-----------------------------
#### *Arizona, 2022*
![Petrified Forest National Park](assets/builds/petrified.jpeg){: style="width: 100%"}

ASU students [Amy Zhao](https://www.dunlap.utoronto.ca/~amy.zhao/) and
[Libby Berkhout](https://lmberkhout.github.io/) brought their scope along for a trip
to the [Petrified Forest](https://www.nps.gov/pefo/index.htm) to try it in a very low RFI environment (compared to
the Phoenix area).
When they returned home and looked at their data, they found the noise was much
higher than expected, and they suspect this was due to plugging in the amplifier
after the long coax cable.
The LNA needs to be as close to the probe as possible to amplify the tiny astronomical
signal before it diminishes on the way to the other electronics.
While their data didn't turn out great, they learned about the importance of
rehearsing the setup before taking the horn out into the wild.
Subsequently we developed a [printable packing list and field procedure guide](memos/CHART_procedure.pdf)
to help make observing run smoothly.
Amy and Libby's cool pictures were an awesome side benefit!
You can read about their adventure in
[their memo](memos/2022.06.25_PetrifiedForest.pdf).
