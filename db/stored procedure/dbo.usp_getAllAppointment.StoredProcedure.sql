USE [DBConsultory]
GO
/****** Object:  StoredProcedure [dbo].[usp_getAllAppointment]    Script Date: 1/6/2019 8:49:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: 25/09/2018
-- Description:	Get Totals Consultory
-- =============================================
CREATE PROCEDURE [dbo].[usp_getAllAppointment]
	-- Add the parameters for the stored procedure here
AS
BEGIN
	SET NOCOUNT ON;
    -- Insert statements for procedure here

	SELECT 
	 A.[IdAppointment], A.IdPatient, A.Comments, A.[Status], A.[IdUser], A.[Date] 
	,  CONVERT(VARCHAR(8), A.[Date],108)  as [Time] 
	,p.FirstName + ' ' + p.LastName as PatientName, p.Phone as PatientPhone
	,u.FirstName + ' ' + u.LastName as UserName

	 FROM Appointment A
	 INNER JOIN Patient AS P ON (P.IdPatient = A.IdPatient)
	 INNER JOIN Users AS U ON (U.IdUser = A.IdUser)
	 ORDER BY  A.[Date]  DESC
	  


END
GO
