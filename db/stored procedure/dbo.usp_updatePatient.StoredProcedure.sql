USE [DBConsultory]
GO
/****** Object:  StoredProcedure [dbo].[usp_updatePatient]    Script Date: 10/14/2018 7:55:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: 25/09/2018
-- Description:	Update Patient
-- =============================================
CREATE PROCEDURE [dbo].[usp_updatePatient]
	@pFirstName NVARCHAR(250),
    @pLastName NVARCHAR(250),
	@pBirthDate NVARCHAR(250),
	@pActive bit,
	@pPhone NVARCHAR(50),
    @pPhone2 NVARCHAR(50),
	@pPatientId INT,
	@pEmail NVARCHAR(250)
AS
BEGIN
	SET NOCOUNT ON;
    -- Insert statements for procedure here

	UPDATE  Patient
	SET
	 FirstName = @pFirstName,
	 LastName = @pLastName,
	 BirthDate =@pBirthDate,
	 Active = @pActive,
	 Phone = @pPhone,
	 [Phone2] = @pPhone2,
	 [Date] = GETDATE(),
	 Email =@pEmail
	WHERE IdPatient = @pPatientId


END
GO
