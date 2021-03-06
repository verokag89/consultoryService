USE [DBConsultory]
GO
/****** Object:  Table [dbo].[Consultory]    Script Date: 1/6/2019 8:49:09 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Consultory](
	[IdConsultory] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NULL,
	[Location] [nvarchar](250) NULL,
	[Phone] [nvarchar](50) NULL,
	[Logo] [image] NULL,
PRIMARY KEY CLUSTERED 
(
	[IdConsultory] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
