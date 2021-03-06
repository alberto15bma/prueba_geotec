USE [GEOTEC]
GO
/****** Object:  Table [dbo].[Producto]    Script Date: 03/05/2022 13:24:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Producto](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [nvarchar](50) NULL,
	[Talla] [nvarchar](max) NULL,
	[Precio] [float] NOT NULL,
	[Descripcion] [nvarchar](max) NULL,
	[Imagen] [nvarchar](max) NULL,
 CONSTRAINT [PK_Producto] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  StoredProcedure [dbo].[SP_BuscaProducto]    Script Date: 03/05/2022 13:24:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_BuscaProducto]
				@IdProducto int
AS
BEGIN
				SET NOCOUNT ON;
				BEGIN TRY
								SELECT * FROM Producto WHERE Id = @IdProducto;
				END TRY
				BEGIN CATCH
								SELECT 0 as estado, -1 as codigo,
												ERROR_MESSAGE()   AS mensaje,
												ERROR_PROCEDURE() AS ErrorProcedure,
												ERROR_LINE()      AS ErrorLine
				END CATCH;
END
GO
/****** Object:  StoredProcedure [dbo].[SP_ListaProductos]    Script Date: 03/05/2022 13:24:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[SP_ListaProductos]
				@Busqueda VARCHAR(50)
AS
BEGIN
				SET NOCOUNT ON;
				BEGIN TRY
								IF(@Busqueda != '')
												SELECT * FROM Producto WHERE Nombre LIKE '%'+@Busqueda+'%';
								ELSE
												SELECT * FROM Producto;
				END TRY
				BEGIN CATCH
								SELECT 0 as estado, -1 as codigo,
												ERROR_MESSAGE()   AS mensaje,
												ERROR_PROCEDURE() AS ErrorProcedure,
												ERROR_LINE()      AS ErrorLine
				END CATCH;
END
GO
