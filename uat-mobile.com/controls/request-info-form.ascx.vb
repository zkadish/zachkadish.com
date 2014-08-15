Option Explicit On
Option Strict On

Imports UATData
Imports CampusVueAPI

Partial Class RequestInfoForm
	Inherits System.Web.UI.UserControl
	
	Private Const _JSNEWLINE As String = "\n\r"
    Private _formIDValue As Integer = 2
    Private _programIDValue As Integer = 0
    Private _interestIDValue As Integer = 0
    'Private _programType As String = String.Empty

	Protected serverYear As String 

	Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        If Not IsPostBack Then
            'PopulateInfo()
        End If
		
		serverYear = CStr(DateTime.Now.Year)

		'PopulateGradDates()

		'Response.Write("test")
		'Response.Write("<script language='javascript';> alert('test')</Script>")

    End Sub
	
	'Private Sub PopulateGradDates()
	
		'todaysyear = CStr(DateTime.Now.Year)
		
		'Populate the highSchoolGradYear Select drop down
		'Dim i As Integer = 0

		'For i = (DateTime.Now.Year - 20) To (DateTime.Now.Year + 4)
		'	highSchoolGradYear.Items.Add(New ListItem(i.ToString, i.ToString))
		'Next

	'End Sub

End Class
