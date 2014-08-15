Option Explicit On
Option Strict On

Imports UATData
Imports CampusVueAPI
Imports System.Net.Mail

Partial Class VB_AjaxHandler
 Inherits System.Web.UI.Page

 Protected processingresult As String
 Protected message As String

 Dim first As String = ""
 Dim last As String = ""
 Dim street As String = ""
 Dim city As String = ""
 Dim stateID As String = ""
 Dim state As String = ""
 Dim pcode As String = ""
 Dim phone As String = ""
 Dim email As String = ""
 Dim gradyear As String = ""
 Dim programID As String = ""
 Dim program As String = ""
 Dim hearID As String = ""
 Dim hear As String = ""
 Dim other As String = ""

 Protected Sub VB_AjaxHandler_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

	If Request.Form IsNot Nothing Then

		If Request.Form("first") IsNot Nothing Then first = Request.Form("first")
		If Request.Form("last") IsNot Nothing Then last = Request.Form("last")
		If Request.Form("street") IsNot Nothing Then street = Request.Form("street")
		If Request.Form("city") IsNot Nothing Then city = Request.Form("city")
		If Request.Form("stateID") IsNot Nothing Then stateID = Request.Form("stateID")
		If Request.Form("state") IsNot Nothing Then state = Request.Form("state")
		If Request.Form("pcode") IsNot Nothing Then pcode = Request.Form("pcode")
		If Request.Form("phone") IsNot Nothing Then phone = Request.Form("phone")
		If Request.Form("email") IsNot Nothing Then email = Request.Form("email")
		If Request.Form("gradyear") IsNot Nothing Then gradyear = Request.Form("gradyear")
		If Request.Form("programID") IsNot Nothing Then programID = Request.Form("programID")
		If Request.Form("program") IsNot Nothing Then program = Request.Form("program")
		If Request.Form("hearID") IsNot Nothing Then hearID = Request.Form("hearID")
		If Request.Form("hear") IsNot Nothing Then hear = Request.Form("hear")
		If Request.Form("other") IsNot Nothing Then other = Request.Form("other")

		processingresult = "First Name: " & first & "<br />"
		processingresult &= "Last Name: " & last & "<br />"
		processingresult &= "Address: " & street & "<br />"
		processingresult &= "City: " & city & "<br />"
		processingresult &= "State ID: " & stateID & "<br />"
		processingresult &= "State: " & state & "<br />"
		processingresult &= "Postal Code: " & pcode & "<br />"
		processingresult &= "Phone Number: " & phone & "<br />"
		processingresult &= "Email Address: " & email & "<br />"
		processingresult &= "HS Grad Year: " & gradyear & "<br />"
		processingresult &= "Degree Program of Interest ID: " & programID & "<br />"
		processingresult &= "Degree Program of Interest: " & program & "<br />"
		processingresult &= "How did you Hear About Us ID: " & hearID & "<br />"
		processingresult &= "How did you Hear About Us: " & hear & "<br />"
		processingresult &= "Other: " & other & "<br />"

		BuildAndSubmitCampusLead()
		sendEmailReceipt()
	End If

 End Sub

 Private Function BuildAndSubmitCampusLead() As Boolean
		'message = "BuildAndSubmitCampusLead()<br />"
		Dim result As Boolean = True
        
        Try
            'Dim url As String = Request.Url.ToString()
            Dim url As String = Request.ServerVariables("HTTP_HOST")
            url = url.Substring(0, 4)
            'message = url
            If url = "beta" Then
                CampusVueAPI.Authentication.TestMode = True
                'message = "beta site"
            Else
                CampusVueAPI.Authentication.TestMode = False
                'message = "live site"
            End If

            Dim lead As New CampusVueAPI.Lead()

            'Required Info
            lead.Firstname = first
            lead.Lastname = last
            lead.Email = email

            lead.Address = street
            lead.City = city
            lead.StateID = CInt(stateID)

            If pcode.Trim.Length > 5 Then
                lead.ZIP = pcode.Trim.Substring(0, 5)
            Else
                lead.ZIP = pcode.Trim
            End If

            'Default to USA
            lead.CountryID = 259 'USA

            'Default to Google
            'lead.LeadSourceID = 858 '858 = Google
            'lead.LeadSourceID = CType(Lead_Source.SelectedValue, Integer)
            lead.LeadSourceID = CInt(hearID)

            'Default to Advancing Computer Science
            'lead.InterestID = 152 '152 = Advancing Computer Science
			lead.InterestID = CInt(programID.Split(CChar(","))(0))
            
            'lead.ProgramIDs = New Integer() {144} '144 = Advancing Computer Science
			lead.ProgramIDs = New Integer() {CType(programID.Split(CChar(","))(1), Integer)}


            'lead.HighSchoolGraduationYear = HS_Grad_Date_Year.SelectedValue
            lead.HighSchoolGraduationYear = gradyear
            'lead.Phone = "(" + phone1.Text.Trim + ")" + phone2.Text.Trim + "-" + phone3.Text.Trim
            lead.Phone = phone

            'If (Me.ProgramType.ToLower() = "graduate") Then
            '   lead.ProgramType = CampusVueAPI.Lead.ProgramTypes.Grad
            'Else
            lead.ProgramType = CampusVueAPI.Lead.ProgramTypes.Undergrad
            'End If

            'Submit the lead
            lead.ProcessLead()

            If lead.Result <> "OK" Then
                result = False
                IntranetHelper.Utilities.LogErrorToDatabase(New Exception("An error occurred while processing the lead. Result: " + lead.Result))
            End If

        Catch vex As CampusVueAPI.CampusAPIValidationException
            result = False
            IntranetHelper.Utilities.LogErrorToDatabase(vex)
        Catch aex As ApplicationException
            result = False
            IntranetHelper.Utilities.LogErrorToDatabase(aex)
        Catch ex As Exception
            result = False
            IntranetHelper.Utilities.LogErrorToDatabase(ex)
        End Try

		Return result
	End Function

 Private Function sendEmailReceipt() As Boolean
	'create the mail message
	Dim mail As New MailMessage() 
	'mail.From = New MailAddress("user@uat.edu", "Zach Kadish", System.Text.Encoding.UTF8)
	mail.From = New MailAddress("admissions@uat.edu", "The University of Advancing Technology", System.Text.Encoding.UTF8)
	'mail.To.Add(email)
	mail.To.Add(email & ", admissions@uat.edu")
	mail.Subject = "UAT Request Info Confirmation"
	mail.IsBodyHtml = True

	Dim MessageBody As String = ""
	MessageBody = MessageBody & "<html>"
	MessageBody = MessageBody & "<body>"
	MessageBody = MessageBody & "<table border='0' width='600'>"
	MessageBody = MessageBody & "<tr><td style='width: 100px;'><a href='http://www.uat.edu'><img src='http://www.uat.edu/webmedia/jpg/cVeu_UATlogo_100x100_14714.jpg' border='0' alt='' width='100' height='100' /></a></td>"
	MessageBody = MessageBody & "<td style='padding: 0 5px;font-family: arial;font-size: .8em;'><b>The University of Advancing Technology</b><br />2625 W. Baseline Road - Tempe, AZ 85283-1056<br />Main telephone: 602-383-8228<br />Out of state: 877-UAT-GEEK (877-828-4335)<br />Fax: 602-383-8222<br /></td></tr>"
	MessageBody = MessageBody & "</table>"
	MessageBody = MessageBody & "<table width='600'>"
	MessageBody = MessageBody & "<tr><td>&nbsp;</td></tr>"
	MessageBody = MessageBody & "<tr><td style='padding: 0 5px;font-family: arial;font-size: 1.6em;'><b>FORM RECEIPT: REQUEST INFO</b></td></tr>"
	MessageBody = MessageBody & "<tr><td style='padding: 0 0 5px 5px;font-family: arial;font-size: 1em;'><a href='https://www.uat.edu/mobile/request-info.aspx'>www.uat.edu/mobile/request-info.aspx</a></td></tr>"
	MessageBody = MessageBody & "<tr><td>&nbsp;</td></tr>"
	MessageBody = MessageBody & "<tr><td style='padding: 2px 5px;font-family: arial;font-size: 1em;'><b>" & first & " " & last & ",</b></td></tr>"
	'MessageBody = MessageBody & "<tr><td style='padding: 2px 5px;background-color: #d1d1d1;font-family: arial;font-size: 1em;'><b>Last Name:</b>&nbsp;" & last & "</td></tr>"
	MessageBody = MessageBody & "<tr><td style='padding: 2px 5px;font-family: arial;font-size: .8em;'><b>You have provided the information below. Please save this email for your records.</b></td></tr>"
	MessageBody = MessageBody & "<tr><td>&nbsp;</td></tr>"
	MessageBody = MessageBody & "<tr><td style='padding: 2px 5px;background-color: #ebebeb;font-family: arial;font-size: 1em;'><b>Address:</b>&nbsp;" & street & "</td></tr>"
	MessageBody = MessageBody & "<tr><td style='padding: 2px 5px;background-color: #d1d1d1;font-family: arial;font-size: 1em;'><b>City:</b>&nbsp;" & city & "</td></tr>"
	'MessageBody = MessageBody & "<tr><td style='padding: 2px 5px;background-color: #ebebeb;font-family: arial;font-size: 1em;'><b>State ID:</b>&nbsp;" & stateID & "</td></tr>"
	MessageBody = MessageBody & "<tr><td style='padding: 2px 5px;background-color: #ebebeb;font-family: arial;font-size: 1em;'><b>State:</b>&nbsp;" & state & "</td></tr>"
	MessageBody = MessageBody & "<tr><td style='padding: 2px 5px;background-color: #d1d1d1;font-family: arial;font-size: 1em;'><b>Postal Code:</b>&nbsp;" & pcode & "</td></tr>"
	MessageBody = MessageBody & "<tr><td style='padding: 2px 5px;background-color: #ebebeb;font-family: arial;font-size: 1em;'><b>Phone Number:</b>&nbsp;" & phone & "</td></tr>"
	MessageBody = MessageBody & "<tr><td style='padding: 2px 5px;background-color: #d1d1d1;font-family: arial;font-size: 1em;'><b>Email Address:</b>&nbsp;" & email & "</td></tr>"
	MessageBody = MessageBody & "<tr><td style='padding: 2px 5px;background-color: #ebebeb;font-family: arial;font-size: 1em;'><b>High School Grad Year:</b>&nbsp;" & gradyear & "</td></tr>"
	'MessageBody = MessageBody & "<tr><td style='padding: 2px 5px;background-color: #d1d1d1;font-family: arial;font-size: 1em;'><b>How did you Hear About Us ID:</b>&nbsp;" & hearID & "</td></tr>"
	MessageBody = MessageBody & "<tr><td style='padding: 2px 5px;background-color: #d1d1d1;font-family: arial;font-size: 1em;'><b>Degree Program of Interest:</b>&nbsp;" & program & "</td></tr>"
	MessageBody = MessageBody & "<tr><td style='padding: 2px 5px;background-color: #ebebeb;font-family: arial;font-size: 1em;'><b>How did you Hear About Us:</b>&nbsp;" & hear & "</td></tr>"
	MessageBody = MessageBody & "<tr><td style='padding: 2px 5px;background-color: #d1d1d1;font-family: arial;font-size: 1em;'><b>How did you Hear About Us - Other:</b>&nbsp;" & other & "</td></tr>"
	MessageBody = MessageBody & "<tr><td>&nbsp;</td></tr>"
	MessageBody = MessageBody & "<tr><td style='padding: 0 5px;font-family: arial;font-size: .8em;'><b>Thank you for contacting us, we will get in touch with you shortly!</b><br /><a href='mailTo:webmaster@uat.edu'>webmaster@uat.edu</a></td></tr>"
	MessageBody = MessageBody & "</table>"
	MessageBody = MessageBody & "</body>"
	MessageBody = MessageBody & "</html>"


	mail.Body = MessageBody

	

	'set the server
	Dim client As New SmtpClient() 'tempcashub, 208.204.80.70, rossak, "", "_www.mail.uat.edu"
	'use uat's exchange server
	client.UseDefaultCredentials = false
	client.Host = "rossak.known-universe.com"	'"tempcashub" port:587
	client.Port = 25
	'client.Credentials = New System.Net.NetworkCredential("username", "password") 
	'*** this setting is not required for using uats SMTP server
	'ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls

	'*** Use googles exchange srever
	'*** To use googles server the policy map on the edge firewall will have to changed to stop blocking traffic from outside our server
	'client.UseDefaultCredentials = True
	'client.Host = "smtp.gmail.com"
	'client.Port = 25 '587 or 465
	'client.Credentials = New System.Net.NetworkCredential("username", "password")
	'client.EnableSsl = True
	'** These settings are not currently required to use gmail SMTP servers
	'client.ConnectType = SmtpConnectType.ConnectSSLAuto 
	'client.DeliveryMethod = Net.Mail.SmtpDeliveryMethod.Network 
	
	'
	'Send the message
	Try
		client.Send(mail)
		'Response.BufferOutput = True
		'Response.RedirectLocation = "https://www.uat.edu/mobile/InfoThankYou.aspx"
		
		'Response.Redirect("https://www.uat.edu/mobile/InfoThankYou.aspx")
		'Response.Write("Your Email has been sent sucessfully - Thank You")
	Catch exc As Exception
		Response.Write("Send failure: " & exc.ToString())
	End Try

	Return True
 End Function


End Class








