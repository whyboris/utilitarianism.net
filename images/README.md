# Images

This folder contains source files to re-create images when needed (for a new translation or any other reason).

## Population Ethics

Use _Adobe Illustrator_ to edit the file. When saving:

1. File -> Save As -> Save as type `svg`
2. Click "Use Artboards"
3. Profile `SVG 1.1`
4. Fonts _Type_ `Convert to outline`

After saving, `Optimize` the SVG (see section below)

## Global Income Distribution

The folder `Global-Income-Distribution` contains all the data needed to re-create the _Global Income Distribution_ chart featured in the _Acting on Utilitarianism_ chapter. To re-create it requires some additional setup to run some code.

1. Install _Python_
2. `pip install virtualenv`
3. Navigate to the `Global-Income-Distribution` folder in your terminal.
4. `virtualenv venv`
5. Mac: `source venv/bin/activate` / Windows: `source venv\Scripts\activate`
6. `pip install -r requirements.txt`
7. `jupyter lab`

When _Jupyter Lab_ starts, open the `Global-Income-Distribution.ipynb` file and execute all the cells. The last one generates `Global-Income-Distribution.svg`

After saving, `Optimize` the SVG (see section below)

## Optimize SVG

Please decrease the size of any generated _svg_:

1. Go to [svgviewer.dev](https://www.svgviewer.dev/)
2. click `Upload` on the bottom & choose your _svg_
3. click the `Optimize` button at the top
4. click `Prettify` next to it
5. click `Download` button on the bottom
6. move the downloaded file into `static/img` folder, replacing the old
