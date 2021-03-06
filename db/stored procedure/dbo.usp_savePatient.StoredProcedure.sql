USE [DBConsultory]
GO
/****** Object:  StoredProcedure [dbo].[usp_savePatient]    Script Date: 1/6/2019 8:49:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: 25/09/2018
-- Description:	Save Patient
-- =============================================
CREATE PROCEDURE [dbo].[usp_savePatient]
	@pFirstName NVARCHAR(250),
    @pLastName NVARCHAR(250),
	@pBirthDate NVARCHAR(250),
	@pActive bit,
	@pPhone NVARCHAR(50),
    @pPhone2 NVARCHAR(50),
	@pEmail NVARCHAR(250),
	@pPatientNumber int
AS
BEGIN
	SET NOCOUNT ON;
    -- Insert statements for procedure here

	INSERT INTO  Patient([FirstName],[LastName],[BirthDate],[Phone],[Phone2], [Active], [Date], Email, PatientNumber )
	VALUES (@pFirstName, @pLastName, @pBirthDate ,@pPhone, @pPhone2,@pActive, GETDATE(), @pEmail, @pPatientNumber)

END
GO
