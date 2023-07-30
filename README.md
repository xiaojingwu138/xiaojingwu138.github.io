<!DOCTYPE html>
<html>
<script src="https://d3js.org/d3.v7.min.js"></script>
<head>
    <title>Covid-19 Cases from 2020 to 2023</title>
    <link rel="stylesheet" type="text/css" href="index.css">
</head>
    <h1 id="intro">Covid-19 Cases Analysis</h1>
    <div>
       
        <h3>
            The data set is the COVID-19 cases, it extracts the cases in the U.S., and the visualization of data indicates the trend of the cases by day and by different states in the U.S. from 2020 to 2023.  It also includes the comparison of average cases and death cases
           
        </h3>
        <ul>
            <li>
                <a href="#one" class="contents">Covid-19 Average Cases & Covid-19 Death Cases</a>
            </li>
            <li>
                <a href="#two" class="contents">Covid-19 Cases distribution in states within U.S.</a>
            </li>
            <li>
                <a href="#three" class="contents">Covid-19 Death Cases distribution in states within U.S.</a>
            </li>
        </ul>
        <hr>

    </div>
    <a href="#two" class="back">Next</a>
    <h2 id="one">Covid-19 Average Cases & Covid-19 Death Cases</h2>
    <p>The trend of covid-19 cases and death cases from 2020 to 2023. Click on the buttons to explore each one. </p>
    <div>
        <select id="selectButton"></select>
    </div>
    <svg id="view1" width=1500 height=500>

    </svg>

    <hr>
    <a href="#intro" class="back">Back to Top</a>
    <a href="#one" class="back">Previous</a>
    <a href="#three" class="back">Next</a>
     <script src="vis.js"></script>
  
    <h2 id="two">Covid-19 Cases distribution in states within U.S.</h2>
    <p>The number of cases is greatly different in each state within U.S.
    </p>
    <svg id="view2" width=1050 height=400></svg>
    <hr>

    <a href="#intro" class="back">Back to Top</a>
    <a href="#two" class="back">Previous</a>
  
      <script src="index2.js"></script>
    <h2 id="three">Covid-19 Death Cases distribution in states within U.S.</h2>
    <p>The number of death cases is greatly different in each state within U.S.
        </p>
    <svg id="view2" width=1050 height=1200></svg>

    <!-- Script -->
    <script src="index2.js"></script>

    <hr>
    <a href="#intro" class="back">Back to Top</a>
    <h2>About this Visualization</h2>
    <p>
        This is a narrative visualization created for the CS 498 Data Visualization course. Overview: The above visualization utilizes
        the slideshow narrative visualization technique, while incorporating hybrid elements of the drill-down technique.
        Each slide contains guidance on how to interact with the visualization. The structure of the slides guides users
        from one idea to the next, but there is still room for individual exploration at each stage. We accomplish visual
        consistency by maintaining uniform elements throughout, introducing a mixture of text, image and chart elements,
        and having meaningful colors.
    </p>

    <h3>Scenes</h3>
    <p>
        The scenes themselves are constructed via HTML id tags. Each scene has a unique id that is linked via the buttons.The “Next/Previous”
        buttons allow users to navigate from scene to scene independently, but the structure helps guide the overall narrative.
        Each scene is composed of a unique chart that highlights its own distinct message.
    </p>
    <h3>Annotations</h3>
    <p>
        Annotations remain consistent on the charts, even throughout changes triggered by the interactions. This allows the user
        to have some grounding on the overall message the visualization is trying to communicate. For example, the annotation
        about a relatively good gas mileage stays consistent throughout the vis transformation from highway mileage to city
        mileage. This can help a user better understand which car makes consistently have good mileage across both parameters.
    </p>
    <h3>Parameters</h3>
    <p>
        The visualizations have a handful of relevant parameters that help the user better explore the data. By interacting with
        JavaScript input features, such as the toggle buttons or the interactive legend in vis2, the user can choose to see
        data about a specific category, or even filter out the datapoints by hovering over specific engine cylinder categories.
        The user input is used as a parameter that controls what the visualization portrays.
    </p>
    <h3>Triggers</h3>
    <p>
        The triggers are implemented via events and callbacks, such as “mouseover”, “mouseout” and “click”. When specific html elements
        experience these events, the callback function is invoked, and we can change the visualization with respect to the
        action indicated by the trigger. The example triggers we have here are the buttons and hovering legend.
    </p>
    <hr>

    <p>
        <a href="#intro" class="back">Back to Top</a>

        <h2>Acknowledgements</h2>
        <p>Listed here are the various sources I used for learning about D3. Elements of this visualization are drawn from the
            examples cited below.
        </p>
        <ul>
            <li>
                <a href="https://flunky.github.io/cars2017.csv">Data Source</a>
            </li>
            <li>
                <a href="https://bl.ocks.org/d3noob/4e4485d94aebf63ae8059258c40f2609">Tooltips</a>
            </li>
            <li>
                <a href="https://www.d3-graph-gallery.com/graph/bubble_tooltip.html">Tooltips 2</a>
            </li>
            <li>
                <a href="https://observablehq.com/@d3/d3-scaleordinal">ScaleOrdinal</a>
            </li>
            <li>
                <a href="https://www.d3-graph-gallery.com/graph/bubble_template.html">Opacity change on hover</a>
            </li>
        </ul>
    </p>
</body>

</html>CO
