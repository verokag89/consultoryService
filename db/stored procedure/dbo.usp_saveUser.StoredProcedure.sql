USE [DBConsultory]
GO
/****** Object:  StoredProcedure [dbo].[usp_saveUser]    Script Date: 1/6/2019 8:49:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: 25/09/2018
-- Description:	Save User
-- =============================================
CREATE PROCEDURE [dbo].[usp_saveUser]
	-- Add the parameters for the stored procedure here
	@pUserId int,
	@pUserName NVARCHAR(250),
	@pLastName NVARCHAR(250),
	@pPositionId int = 0
AS
BEGIN
	SET NOCOUNT ON;
    -- Insert statements for procedure here
	INSERT INTO  Users (FirstName,LastName,IdPosition,[Date])
	VALUES (@pUserName, @pLastName, COALESCE(@pPositionId, NULL), GETDATE())
END
GO
