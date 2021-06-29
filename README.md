# js-form-submissions
Hard to find web hosts with server side code, been using this workaround a lot recently.

Instead of php form submissions, this method deploys a google app script as an executable web app that gets called via javascript to record data to a google sheet.

##Setup

###HTML Form
When constructing the form, give each input a name and note the names used.

'''HTML
<input type="text" name="name">
'''

Add the id "submit-form" to the form tag
'''HTML
<form id="submit-form"></form>
'''

Add an empty div tag after the form with the id "success-msg"
'''
<div id="success-msg"></div>
'''

###Google App Script
1. Make a google sheet with the cells in the first row being each name from the previous step. Include "timestamp" as a cell in the first row as well if you want to see the date the submission came in (also may want to consider changing the format to Date Time in that column if you want to see the exact time of submission). If you don't want submission date info then don't include the timestamp label.
2. Click tools then script editor in your sheet and add the code from googlesheetscript.gs 
3. Run the setup function to initialize the library (if you make changes after deployment, you may need to repeat this step)
4. Click deploy and start a new deployment, selecting web app as the type. In deployment setup, be sure to set the app to execute as you and authorize it so anyone has access (This allows the sheet to be accessed when the js function is called. You can also choose to make the sheet accessible by anyone and change permission settings, but I've found this works best.)
5. Copy the link you get when you finish deployment

###Javascript
Add your web app url to the SubForm() function where indicated.

##License
Do whatever just don't be a bad person