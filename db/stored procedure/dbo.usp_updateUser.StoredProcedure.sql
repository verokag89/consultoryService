USE [DBConsultory]
GO
/****** Object:  StoredProcedure [dbo].[usp_updateUser]    Script Date: 1/6/2019 8:49:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: 25/09/2018
-- Description:	Update User
-- =============================================
CREATE PROCEDURE [dbo].[usp_updateUser]
	-- Add the parameters for the stored procedure here
	@pUserId int,
	@pUserName NVARCHAR(250),
	@pLastName NVARCHAR(250),
	@pPositionId int = 0
AS
BEGIN
	SET NOCOUNT ON;

 	UPDATE  Users
	SET
	 FirstName = @pUserName,
	 LastName = @pLastName,
	 IdPosition = @pPositionId,
	 [Date] = GETDATE()
	WHERE IdUser = @pUserId 

END
GO
