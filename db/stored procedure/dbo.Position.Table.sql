USE [DBConsultory]
GO
/****** Object:  Table [dbo].[Position]    Script Date: 1/6/2019 8:49:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Position](
	[IdPosition] [int] IDENTITY(1,1) NOT NULL,
	[Position] [nvarchar](100) NULL,
	[Description] [nvarchar](150) NULL,
PRIMARY KEY CLUSTERED 
(
	[IdPosition] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
