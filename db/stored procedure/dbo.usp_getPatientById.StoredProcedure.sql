USE [DBConsultory]
GO
/****** Object:  StoredProcedure [dbo].[usp_getPatientById]    Script Date: 1/6/2019 8:49:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: 25/09/2018
-- Description:	Get patient by Id
-- =============================================
CREATE PROCEDURE [dbo].[usp_getPatientById]
	@pPatientId INT
AS
BEGIN
	SET NOCOUNT ON;
    -- Insert statements for procedure here
	SELECT IdPatient,FirstName, LastName, BirthDate, [Date],[Phone],[Phone2], Active, Email, PatientNumber FROM Patient
	WHERE IdPatient  = @pPatientId
	ORDER BY FirstName
	 

END
GO
