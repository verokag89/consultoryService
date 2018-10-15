USE [DBConsultory]
GO
/****** Object:  StoredProcedure [dbo].[usp_deleteUser]    Script Date: 10/14/2018 7:55:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: 25/09/2018
-- Description:	Delete User
-- =============================================
CREATE PROCEDURE [dbo].[usp_deleteUser]
	-- Add the parameters for the stored procedure here
	@pUserId int
AS
BEGIN
	SET NOCOUNT ON;

 	DELETE FROM  Users
	WHERE IdUser = @pUserId 

END
GO
