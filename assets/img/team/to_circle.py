import os 
import matplotlib.pyplot as plt 
import numpy as np 

input_fname = 'ori/gang_hua.jpg'
oroot = 'circle'
output_fname = os.path.join(oroot, os.path.basename(input_fname)[:-3] + 'png')

img = plt.imread('ori/gang_hua.jpg')

if img.dtype == np.uint8:
	img = img / 255.0

h, w = img.shape[:2]
circle_img = np.ones((h, w, 4))

# select a circle region in side the image 
radius = min(h, w)//2

# create a grid of coordinates 
x_coord, y_coord = np.meshgrid(np.arange(w), np.arange(h))
distances = np.sqrt((x_coord - w//2)**2 + (y_coord - h//2)**2)
mask = distances <= radius

# copy rgb 
circle_img[mask, :3] = img[mask, :3]

# remove alpha 
circle_img[~mask, -1] = 0

# only save the circle regions 
output_img = circle_img[h//2-radius:h//2+radius, w//2-radius:w//2+radius] 

plt.imsave(output_fname, output_img)



