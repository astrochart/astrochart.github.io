import matplotlib.pyplot as plt
import numpy as np

# Use center of continguous US as reference point
center_lon = np.radians(-98.5795)
center_lat = np.radians(39.8283)
R = 6371000  # Radius of Earth in meters

filename = 'builds.csv'
data = np.loadtxt(filename, delimiter=',', skiprows=1, dtype=str)[:, 0]
lonlat = [(np.radians(float(row.split(' ')[1][1:])), np.radians(float(row.split(' ')[2][:-2]))) for row in data]
# Shift the longitude to make the rotation easier
lonlat = [(lon - center_lon, lat) for lon, lat in lonlat]

# Get x/y/z in meters from lon/lat
x = [R * np.cos(lat) * np.sin(lon) for lon, lat in lonlat]
y = [R * np.cos(lat) * np.cos(lon) for lon, lat in lonlat]
z = [R * np.sin(lat) for lon, lat in lonlat]

# Now we rotate about the x-axis by 90 degrees minus center_lat to make the center of the US at the origin
theta = np.radians(90) - center_lat
x_rot = x
y_rot = [-y[i] * np.cos(theta) + z[i] * np.sin(theta) for i in range(len(y))]
z_rot = [y[i] * np.sin(theta) + z[i] * np.cos(theta) for i in range(len(z))]

# Make array of baseline coordinates
baselines = np.empty((len(x_rot)**2, 2))
for i in range(len(x_rot)):
    for j in range(len(x_rot)):
        baselines[i * len(x_rot) + j] = [x_rot[i] - x_rot[j], y_rot[i] - y_rot[j]]
baselines /= 1e3  # Convert to kilometers

# Plot the baselines
plt.figure()
plt.scatter(baselines[:, 0], baselines[:, 1], s=50, marker='D')
plt.title('CHART Build Baselines')
plt.xlabel('East  (km)')
plt.ylabel('North (km)')
maxdim = 1.2 * np.max(np.abs(baselines))
plt.xlim([-maxdim, maxdim])
plt.ylim([-maxdim, maxdim])
plt.gca().set_aspect('equal')
# Trim out white space around the plot
plt.tight_layout()
plt.savefig('chart_baselines.png', dpi=300)