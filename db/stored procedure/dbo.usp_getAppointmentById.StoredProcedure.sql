USE [DBConsultory]
GO
/****** Object:  StoredProcedure [dbo].[usp_getAppointmentById]    Script Date: 10/14/2018 7:55:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: 25/09/2018
-- Description:	GET Appointments BY ID
-- =============================================
CREATE PROCEDURE [dbo].[usp_getAppointmentById]
	-- Add the parameters for the stored procedure here
	@pUserId int,
    @pPatientId int,
	@pComments NVARCHAR(350),
	@pStatus int,
	@pDate Nvarchar(10),
	@pIdAppointment int
AS
BEGIN
	SET NOCOUNT ON;


	SELECT 
	 A.[IdAppointment], A.IdPatient, A.Comments, A.[Status], A.[IdUser], A.[Date] 
	,p.FirstName + ' ' + p.LastName as PatientName, p.Phone as PatientPhone
	,u.FirstName + ' ' + u.LastName as UserName

	 FROM Appointment A
	 INNER JOIN Patient AS P ON (P.IdPatient = A.IdPatient)
	 INNER JOIN Users AS U ON (U.IdUser = A.IdUser)
	WHERE [IdAppointment] = @pIdAppointment
END
GO
