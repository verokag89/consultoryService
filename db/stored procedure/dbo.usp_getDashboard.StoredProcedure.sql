USE [DBConsultory]
GO
/****** Object:  StoredProcedure [dbo].[usp_getDashboard]    Script Date: 1/6/2019 8:49:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: 25/09/2018
-- Description:	Get Totals Consultory
-- =============================================
CREATE PROCEDURE [dbo].[usp_getDashboard]
	-- Add the parameters for the stored procedure here
AS
BEGIN
	SET NOCOUNT ON;
    -- Insert statements for procedure here

	DECLARE @countConsultory INT =  0, @countPatient int= 0, @countUsers int= 0, @countAppointment int= 0;	

	SELECT @countConsultory =  count(*) FROM Consultory ;
	SELECT @countPatient =  count(*) FROM Patient;
	SELECT @countUsers =  COUNT(*) FROM Users;
	SELECT @countAppointment = COUNT(*) FROM Appointment

	SELECT 
	@countConsultory AS TotalConsultory, 
	@countPatient AS TotalPatients, 
	@countUsers AS TotalUsers , 
	@countAppointment AS TotalAppointments

END
GO
