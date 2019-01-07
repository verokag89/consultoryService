USE [DBConsultory]
GO
/****** Object:  StoredProcedure [dbo].[usp_updateConsultory]    Script Date: 1/6/2019 8:49:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: 25/09/2018
-- Description:	Edit User by Id
-- =============================================
CREATE PROCEDURE [dbo].[usp_updateConsultory]
	@pName NVARCHAR(250),
	@pLocation NVARCHAR(250),
	@pPhone NVARCHAR(250),
	@pConsultoryId INT
AS
BEGIN
	SET NOCOUNT ON;
    -- Insert statements for procedure here

	UPDATE  Consultory
	SET
	 [Name] = @pName,
	 [Location] = @pLocation,
	 [Phone] = @pPhone
	WHERE IdConsultory = @pConsultoryId 

END
GO
