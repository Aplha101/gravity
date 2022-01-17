# gravity

reccomended for bigger screen sizes

## Issue - planets spinning anticlockwise
This is because of the difference of screen sizes between portrait and landscape...
lets assume a device that is 1280×800
At landscape mode... the height of the device is  1280 and width is 800
At portrait the height becomes 800 and width becomes 1280 

the planet Axis was set by the virtue of landscape mode , thus when in portrait the x and y Axis also change resulting in mis-calculations 

this will be fixed soon 

# The solution 
Solution for this problem *for now* is to swtich from protrait to landscape and refreshing the page and also switching to desktop mode in chrome.