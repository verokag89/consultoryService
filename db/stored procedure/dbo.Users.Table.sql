USE [DBConsultory]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 1/6/2019 8:49:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[IdUser] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](250) NULL,
	[LastName] [nvarchar](250) NULL,
	[Date] [date] NULL,
	[IdPosition] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[IdUser] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_User_Position] FOREIGN KEY([IdPosition])
REFERENCES [dbo].[Position] ([IdPosition])
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_User_Position]
GO
