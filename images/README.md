# Images

This folder contains source files to re-create images when needed (for a new translation or any other reason).

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

To decrease the size of the generated _svg_:

1. copy/pasting the contents of the _svg_ to [svgviewer.dev](https://www.svgviewer.dev/)
2. click the `Optimize` button at the top
3. click `Prettify`
4. copy/paste the output into the _svg_ file and place it into `static/img` folder, replacing the old
